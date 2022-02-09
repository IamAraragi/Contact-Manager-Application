import * as UserService from "../services/user.service.js";
import { StatusCodes } from "http-status-codes";

/**
 * Function to register the user
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
export const registerUser = async (req, res, next) => {
  try {
    const id = await UserService.registerUser(req.body);
    res.status(StatusCodes.CREATED).json(id);
  } catch (err) {
    next({
      statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
      message: "User cannot be registered",
    });
  }
};

/**
 * Function to get the user from their email
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
export const getUser = async (req, res, next) => {
  try {
    const user = await UserService.getUser(req.body.email);
    req.user = user;
    next();
  } catch (err) {
    next({
      statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
      message: "User not found",
    });
  }
};

/**
 * Function to login the user
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
export const loginUser = async (req, res, next) => {
  res.status(StatusCodes.ACCEPTED).json({
    id: req.user.id,
    email: req.user.email,
    token: req.user.token,
  });
};
