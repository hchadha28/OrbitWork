import { Router } from "express";
import { login, registerUser } from "../controllers/auth.controllers.js";
import { validate } from "../middlewares/validator.middleware.js";
import { userRegisterValidator, userLoginValidator } from "../validators/index.js";

const router = Router();
// validate is the true middleware, we first pass our data through our own custom error checker,
// then middleware, middleware itself calls next() if no errors

router.route("/register").post(userRegisterValidator(), validate, registerUser);
router.route("/login").post(userLoginValidator(), validate, login);

export default router;
