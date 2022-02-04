import { ReasonPhrases, StatusCodes, getReasonPhrase } from "http-status-codes";

export const errorHandler = (err, req, res, next) => {
  const { statusCode, message } = err;

  res.status(statusCode).json({
    status: getReasonPhrase(statusCode),
    message: message,
  });
};

export const notFoundErrorHandler = (req, res, next) => {
  const err = new Error(ReasonPhrases.NOT_FOUND);
  err.statusCode = StatusCodes.NOT_FOUND;
  next(err);
};
