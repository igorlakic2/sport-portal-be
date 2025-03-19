const express = require("express");
const { body } = require("express-validator");
const User = require("../models/userModel");
const router = express.Router();
const { signUp, login } = require("../controllers/authController");

router.put(
  "/sign-up",
  [
    body("email")
      .isEmail()
      .withMessage("Please enter a valid email.")
      .custom((value, { req }) => {
        return User.findOne({ email: value }).then((user) => {
          if (user) {
            return Promise.reject("Email address already exists");
          }
        });
      })
      .normalizeEmail(),
    body("password").trim().isLength({ min: 5 }),
    body("firstName").trim().not().isEmpty(),
    body("lastName").trim().not().isEmpty(),
  ],
  signUp
);

router.post("/login", login);

module.exports = router;
