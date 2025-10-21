import { body } from "express-validator";

const userRegisterValidator = () => {
  return [
    body("email")
      .trim()
      .notEmpty()
      .withMessage("Email is required")
      .isEmail()
      .withMessage("Email is not valid"),

    body("username")
      .trim()
      .notEmpty()
      .withMessage("Username is required")
      .isLowercase()
      .withMessage("Username must be in lowercase")
      .isLength({ min: 3 })
      .withMessage("Username must be atleast 3 characters long"),

    body("password").trim().notEmpty().withMessage("Password is required"),

    body("fullname").optional().trim(),
  ];
};
const userLoginValidator = () => {
  return [
    body("email")
      .notEmpty()
      .withMessage("Invalid credentials")
      .isEmail()
      .withMessage("Invalid credentials"),

    body("password").notEmpty().withMessage("Invalid credentials"),
  ];
};
const userChangeCurrentPasswordValidator = () => {
  return [
    body("oldPassword").notEmpty().withMessage("Old password is required"),
    body("newPassword").notEmpty().withMessage("New password is required"),
  ];
};
const userForgotPasswordValidator = () => {
  return [
    body("email")
      .notEmpty()
      .withMessage("Invalid credentials")
      .isEmail()
      .withMessage("Invalid credentials"),
  ];
};
const userResetForgotPasswordValidator = () => {
  return [body("newPassword").notEmpty().withMessage("Password is required")];
};
export {
  userRegisterValidator,
  userLoginValidator,
  userChangeCurrentPasswordValidator,
  userForgotPasswordValidator,
  userResetForgotPasswordValidator,
};
