const BaseError = require("../api-errors/baseError");

const logError = (err) => {
  console.error(err);
};

const logErrorMiddlware = (err, req, res, next) => {
  logError(err);
  next(err);
};

const returnError = (err, req, res, next) => {
  res.status(err.statusCode || 500).send({ message: err.message });
};

module.exports = {
  logError,
  logErrorMiddlware,
  returnError,
};
