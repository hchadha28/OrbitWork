import { Router } from "express";
import {
  login,
  logout,
  registerUser,
} from "../controllers/auth.controllers.js";
import { validate } from "../middlewares/validator.middleware.js";
import {
  userRegisterValidator,
  userLoginValidator,
} from "../validators/index.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();
// validate is the true middleware, we first pass our data through our own custom error checker,
// then middleware, middleware itself calls next() if no errors

router.route("/register").post(userRegisterValidator(), validate, registerUser);
router.route("/login").post(userLoginValidator(), validate, login);
// get and post are same in logout

router.route("/logout").post(verifyJWT, logout);

export default router;
