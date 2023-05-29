const express = require("express");
const upload = require("../utils/multer"); // for file upload and storage
const router = express.Router();

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

// const { isAuthenticatedUser, authorizeRoles } = require("../middlewares/auth");

router.get("/", getUserProfile);

//register user
router.post("/register", upload.single("avatar"), registerUser);

//token verification for user activation
router.post("/activation", tokenVerification);

module.exports = router;
