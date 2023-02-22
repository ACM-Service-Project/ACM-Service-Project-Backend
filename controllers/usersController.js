const UserModel = require("../models/userModel");
const Error400 = require("../api-errors/apiError400");

// Returns all users in db.
const getUsers = async (req, res, next) => {
  UserModel.find().exec((err, docs) => {
    // E.g. of how to use custom errors objects.
    // Use next if error is thrown inside a callback.
    if (err) next(new Error400(err.message));
    else res.status(200).send(docs);
  });
};

module.exports = { getUsers };
