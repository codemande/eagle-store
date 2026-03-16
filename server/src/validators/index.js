import { body } from "express-validator";

const userRegisterValidator = () => {
  return [
    body("email")
      .trim()
      .notEmpty()
      .withMessage("Email is required")
      .isEmail()
      .withMessage("Email is invalid"),
    body("fullname")
      .trim()
      .notEmpty()
      .withMessage("Fullname is required")
      .isLength({ min: 3 })
      .withMessage("Fullname must be at least 3 characters"),
    body("password")
      .trim()
      .notEmpty()
      .withMessage("Password is required")
  ]
}

const userLoginValidator = () => {
  return [
    body("email")
      .isEmail()
      .withMessage("Email is invalid")
      .notEmpty()
      .withMessage("Email is required"),
    body("password")
      .notEmpty()
      .withMessage("Password is Required")
  ]
}

export {
  userRegisterValidator,
  userLoginValidator
}