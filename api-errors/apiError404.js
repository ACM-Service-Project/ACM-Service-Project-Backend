const httpStatusCodes = require("./httpStatusCodes");
const BaseError = require("./baseError");

class ApiError404 extends BaseError {
  constructor(
    description,
    name = "Not Found",
    statusCode = httpStatusCodes.NOT_FOUND,
    isOperational = true
  ) {
    super(name, statusCode, isOperational, description);
  }
}

module.export = ApiError404;
