const httpStatusCodes = require("./httpStatusCodes");
const BaseError = require("./baseError");

class ApiError422 extends BaseError {
  constructor(
    description,
    name = "Unprocessable Entity",
    statusCode = httpStatusCodes.UNPROCESSABLE_ENTITY,
    isOperational = true
  ) {
    super(name, statusCode, isOperational, description);
  }
}

module.exports = ApiError422;
