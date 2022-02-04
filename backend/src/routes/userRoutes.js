import express from "express";
import * as UserController from "../controllers/user.controller.js";
import {
  generateHashPassword,
  verifyPassword,
  generateToken,
} from "../middlewares/authentication.middleware.js";
import { validator } from "../middlewares/validator.middleware.js";
import { userSchema } from "../validators/userSchema.js";

const router = express.Router();

router.post(
  "/register",
  validator(userSchema),
  generateHashPassword,
  UserController.registerUser
);

router.post(
  "/login",
  validator(userSchema),
  UserController.getUser,
  verifyPassword,
  generateToken,
  UserController.loginUser
);

export default router;
