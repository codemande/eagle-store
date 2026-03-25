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

     body("phone")
      .trim()
      .notEmpty()
      .withMessage("Phone number is required")
      .customSanitizer((value) => value.replace(/[^\d+]/g, "")) 
      .matches(/^\+?[1-9]\d{7,14}$/)
      .withMessage("Phone number must be valid (international format)"),

    body("password")
      .trim()
      .notEmpty()
      .withMessage("Password is required")
  ]
};

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
};

const userChangeCurrentPasswordValidator = () => {
  return[
    body("oldPasword")
      .notEmpty()
      .withMessage("Old Password is required"),
    body("newPassword")
    .notEmpty()
    .withMessage("New password is required"),
  ]
};

const userForgotPasswordValidator = () => {
  return[
    body("email")
      .notEmpty()
      .withMessage("Email is required")
      .isEmail()
      .withMessage("Email is invalid"),
  ]
};

const userResetForgotPasswordValidator = () => {
  return[
    body("newPassword")
      .notEmpty()
      .withMessage("Password is required"),
  ]
};

export {
  userRegisterValidator,
  userLoginValidator,
  userChangeCurrentPasswordValidator,
  userForgotPasswordValidator,
  userResetForgotPasswordValidator
};