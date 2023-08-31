/** @format */

const expressAsyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken"); //jwt token for user authentication
const fs = require("fs"); //file system for file handling

const User = require("../models/User"); // user model that contains user schema
const sendEmail = require("../utils/nodeMailer"); //node mailer for sending email to user
const upload = require("../utils/multer");
const cloudinary = require("../utils/cloudinary");
//generate jwt token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_TIME,
  });
};

//jwt for activation toke
const generateActivationToken = (id) => {
  return jwt.sign({ id }, process.env.ACTIVATION_SECRET, {
    expiresIn: "5min",
  });
};

//verify activation token
const verifyActivationToken = (token) => {
  return jwt.verify(token, process.env.ACTIVATION_SECRET);
};

//controller starts from here

//get user profile controller
const getUserProfile = expressAsyncHandler(async (req, res) => {
  const { id } = req.user;

  //getting user information from database and send user response to client
  await User.findById(id)
    .select("-password")
    .then((user) => {
      if (!user) {
        throw {
          status: 404,
          message: "User does not exist",
        };
      }
      return res.status(200).json(user);
    })
    .catch((err) => {
      throw new Error(err);
    });
});

//register user controller
const registerUser = expressAsyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  //check if user already exist or not
  User.findOne({ email }).then(async (user) => {
    if (user) {
      //if user exist delete saved avatar
      if (req.file) {
        fs.unlink(req.file.path, (err) => {
          console.log(`file deleted ${req.file.path}`);
          if (err) {
            throw {
              status: 500,
              message: err,
            };
          }
        });
      }

      return res.status(400).json({ message: "Email already exists" });
    }
    const result = await cloudinary.uploader.upload(req.file.path);
    //get file path from multer
    const file = req.file;
    let avatar = {};
    if (file) {
      avatar = { path: result.secure_url, cloudinary_id: result.public_id };
    } else {
      avatar = "uploads/default.jpg";
    }

    //if user does not exist, create a new user and remove password from select
    User.create({
      name,
      email,
      password,
      avatar,
    })
      .then(async (user) => {
        const { _id, name, email, avatar, address, role } = user;
        //generate token for user
        const token = generateToken(user._id);

        // generate activation token
        const activationToken = generateActivationToken(user._id);

        //remove dot from token and replace with underscore
        const activation_token = activationToken.replace(/\./g, "+");
        const url = `http://localhost:5173/activate/${activation_token}`;

        //send email to user
        await sendEmail({
          email: user.email,
          subject: "Account Activation Link",
          message: `<h2>Please click on given link to activate your account</h2>
          <a href="${url}">${url}</a>`,
        });

        //set cookie for user
        res.cookie("token", token, {
          expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), //30 days
          httpOnly: true,
        });

        return res.status(201).json({
          _id,
          name,
          email,
          avatar,
          address,
          role,
        });
      })
      .catch((err) => {
        throw {
          status: 500,
          message: err,
        };
      });
  });
});

//user login controller
const loginUser = expressAsyncHandler(async (req, res) => {
  const { email, password } = await req.body;

  //validating user information
  if (!email || !password) {
    return res
      .status(400)
      .json({ message: "Please provide email and password" });
  }

  //check if user exist or not
  await User.findOne({ email }).then(async (user) => {
    if (!user) {
      return res.status(404).json({ message: "User does not exist" });
    }

    //check if user is activated or not
    if (user.status !== "active") {
      return res.status(403).json({ message: "Please activate your account" });
    }

    //if user exist, check if password is correct or not
    const matched = await user.matchPassword(password);

    //checking password matched or not
    if (!matched) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }
    //if password matched, generate token for user
    const token = generateToken(user._id);

    //setting cookie for user
    res.cookie("token", token, {
      expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), //30 days
      httpOnly: true,
      secure: true,
      path: "/",
    });

    //send user information
    const { _id, name, email, avatar, address, role } = user;

    return res.status(200).json({
      message: "User logged in successfully",
      _id,
      name,
      email,
      avatar,
      address,
      role,
    });
  });
});

//token verification controller
const tokenVerification = expressAsyncHandler(async (req, res) => {
  const { token } = req.body;
  console.log(token);

  //check if activation token is valid or not
  if (!token) {
    return res.status(400).json({ msg: "Invalid Token" });
  }

  //if token is valid, verify token
  const decoded = verifyActivationToken(token);
  console.log(decoded);

  //check if token is valid or not
  if (!decoded) {
    return res.status(400).json({ msg: "Invalid Token" });
  }

  //check if user exist or not
  User.findById(decoded.id)
    .then((user) => {
      if (!user) {
        return res.status(400).json({ msg: "User does not exist" });
      }

      //if user exist, check if user is already activated or not
      if (user.status === "active") {
        return res.status(400).json({ msg: "User already activated" });
      }

      //if user is not activated, update user status to active
      user.status = "active";
      user.save().then((user) => {
        return res.status(200).json({ msg: "Account activated successfully" });
      });
    })
    .catch((err) => {
      throw {
        status: 500,
        message: err,
      };
    });
});

module.exports = { getUserProfile, registerUser, tokenVerification, loginUser };
