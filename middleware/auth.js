const jwt = require("jsonwebtoken");
const Error401 = require("../api-errors/apiError401");

exports.getAuthToken = (req, res, next) => {
  if (!req.get("Authorization")) {
    throw new Error401("Not authenticated.");
  }
  const token = req.get("Authorization").split(" ")[1];
  let decodedToken;
  try {
    decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
  } catch (err) {
    err.status = 500;
    throw err;
  }
  if (!decodedToken) {
    throw new Error401("Not authenticated.");
  }
  req.accountId = decodedToken.id;

  next();

};
