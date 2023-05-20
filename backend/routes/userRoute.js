const express = require("express");
const router = express.Router();

const {
  registerUser,
  loginUser,
  logoutUser,
  forgotPassword,
  resetPassword,
  getUserProfile,
  updatePassword,
  updateProfile,
  getAllUsers,
  getUserDetails,
  updateUser,
  deleteUser,
} = require("../controllers/userController");

// const { isAuthenticatedUser, authorizeRoles } = require("../middlewares/auth");

router.get("/", getUserProfile);

//register user
router.post("/register", registerUser);

module.exports = router;
