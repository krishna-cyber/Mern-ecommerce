const expressAsyncHandler = require("express-async-handler");

const getUserProfile = expressAsyncHandler((req, res) => {
  res.send("Hello World");
});

//register user controller
const registerUser = expressAsyncHandler(async (req, res) => {
  const { name, email, password, avatar } = req.body;
});

module.exports = { getUserProfile, registerUser };
