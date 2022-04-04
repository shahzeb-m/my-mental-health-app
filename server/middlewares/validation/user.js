const { check, validationResult } = require("express-validator");

exports.validateUserSignUp = [
  check("name")
    .trim()
    .not()
    .isEmpty()
    .withMessage("First name is empty.")
    .isLength({ min: 1, max: 20 })
    .withMessage("First name must be between 1 and 20 characters."),

  check("username")
    .trim()
    .not()
    .isEmpty()
    .withMessage("Username is empty.")
    .isLength({ min: 6, max: 30 })
    .withMessage("Username must be between 6 and 30 characters.")
    .isAlphanumeric()
    .withMessage("Username must be alphanumeric."),

  check("password")
    .trim()
    .not()
    .isEmpty()
    .withMessage("Password is empty")
    .isLength({ min: 8, max: 20 })
    .withMessage("Password must be between 8 and 20 characters."),

  check("confirmPassword")
    .trim()
    .not()
    .isEmpty()
    .withMessage("Password is empty")
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error("Passwords do not match.");
      }
      return true;
    }),
];

exports.userValidation = (req, res, next) => {
  const result = validationResult(req).array();
  if (!result.length) return next();

  const error = result[0].msg;
  res.json({ success: false, message: error });
};
