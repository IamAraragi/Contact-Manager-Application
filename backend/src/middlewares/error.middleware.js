import { ReasonPhrases, StatusCodes, getReasonPhrase } from "http-status-codes";

/**
 * Generic function to send the error message as response
 * @param {*} err
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
export const errorHandler = (err, req, res, next) => {
  const { statusCode, message } = err;

  res.status(statusCode).json({
    status: getReasonPhrase(statusCode),
    message: message,
  });
};

/**
 * Function to handle the non available api request
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
export const notFoundErrorHandler = (req, res, next) => {
  const err = new Error(ReasonPhrases.NOT_FOUND);
  err.statusCode = StatusCodes.NOT_FOUND;
  next(err);
};
