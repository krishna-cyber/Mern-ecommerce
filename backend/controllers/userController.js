const expressAsyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken"); //jwt token for user authentication

const User = require("../models/User"); // user model that contains user schema

//generate jwt token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_TIME,
  });
};

//controller starts from here

//get user profile controller
const getUserProfile = expressAsyncHandler((req, res) => {
  res.send("Hello World");
});

//register user controller
const registerUser = expressAsyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  //check if user already exist or not
  User.findOne({ email }).then((user) => {
    if (user) {
      return res.status(400).json({ email: "Email already exists" });
    }

    //get file path from multer
    console.log(req.file);
    const file = req.file;
    let avatar = "";
    if (file) {
      avatar = file.path;
    } else {
      avatar = "uploads/default.jpg";
    }

    //if user does not exist, create a new user and remove password from select
    User.create({
      name,
      email,
      password,
      avatar,
    }).then((user) => {
      const { _id, name, email, avatar, address, role } = user;
      //generate token for user
      const token = generateToken(user._id);

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
    });
  });
});

module.exports = { getUserProfile, registerUser };
