/** @format */

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "please enter your name"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "please enter your email"],
      unique: [true, "Email already exists"],
    },
    password: {
      type: String,
      required: [true, "Please enter your password"],
      minLength: [4, "Password must be at least 4 characters long"],
    },
    phoneNumber: {
      type: String,
    },
    address: [
      {
        country: {
          type: String,
        },
        city: {
          type: String,
        },
        address1: {
          type: String,
        },
        address2: {
          type: String,
        },
        zipCode: {
          type: String,
        },
        addressType: {
          type: String,
        },
      },
    ],
    role: {
      type: String,
      default: "user",
    },
    avatar: {
      path: {
        type: String,
        required: true,
      },
      cloudinary_id: {
        type: String,
        required: true,
      },
    },
    status: {
      type: String,
      default: "pending",
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date,
  },

  {
    timestamps: true,
  }
);

//hashing password

userSchema.pre("save", function (next) {
  var user = this;
  // Only hash the password if it has been modified (or is new)
  if (!user.isModified("password")) return next();
  // Generate a salt
  bcrypt.genSalt(10, function (err, salt) {
    if (err) return next(err);
    // Hash the password using the salt
    bcrypt.hash(user.password, salt, function (err, hash) {
      if (err) return next(err);
      // Override the plain text password with the hashed one
      user.password = hash;
      next();
    });
  });
});

//compare password
userSchema.methods.matchPassword = async function (password) {
  const match = await bcrypt.compare(password, this.password);
  return match;
};

//generating token for user
userSchema.methods.getJwtToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_TIME,
  });
};

//creating model for userSchema
const User = mongoose.model("User", userSchema);

module.exports = User;
