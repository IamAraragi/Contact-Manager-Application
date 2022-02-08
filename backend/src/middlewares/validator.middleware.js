import { StatusCodes } from "http-status-codes";

export const validator = (schema) => async (req, res, next) => {
  const { body } = req;

  try {
    await schema.validateAsync(body);
    next();
  } catch (err) {
    // console.log(err);
    next({
      statusCode: StatusCodes.BAD_REQUEST,
      message: err.message,
    });
  }
};
