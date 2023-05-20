const expressAsyncHandler = require("express-async-handler");

const User = require("../models/User"); // user model that contains user schema

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
      return res.status(201).json({
        user,
      });
    });
  });
});

module.exports = { getUserProfile, registerUser };
