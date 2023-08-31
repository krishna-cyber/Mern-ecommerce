/** @format */

const express = require("express");
// const upload = require("../utils/multer"); // for file upload and storage
const router = express.Router();
const authMiddleware = require("../middlewares/authMiddleware");

const {
  registerUser,
  tokenVerification,
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
const multer = require("multer");
const upload = multer({ dest: "../uploads" });

// const { isAuthenticatedUser, authorizeRoles } = require("../middlewares/auth");

router.get("/getuser", authMiddleware, getUserProfile);

//register user
router.post("/register", upload.single("avatar"), registerUser);

//token verification for user activation
router.post("/activation", tokenVerification);

//login user
router.post("/login", loginUser);

module.exports = router;
