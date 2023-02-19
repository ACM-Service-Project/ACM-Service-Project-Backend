const httpStatusCodes = require("./httpStatusCodes");
const BaseError = require("./baseError");

class ApiError403 extends BaseError {
  constructor(
    description,
    name = "Forbidden",
    statusCode = httpStatusCodes.FORBIDDEN,
    isOperational = true
  ) {
    super(name, statusCode, isOperational, description);
  }
}

module.exports = ApiError403;