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
export { userRegisterValidator, userLoginValidator };
