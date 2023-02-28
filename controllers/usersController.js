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

const getUserById = (req, res, next) => {
  UserModel.findById(req.params.id, (err, doc) => {
    if (err) next(new Error400(err.message));
    else res.status(200).send(doc);
  });
};

const addUser = (req, res, next) => {
  UserModel.create(req.body, (err, doc) => {
    if (err) next(new Error400(err.message));
    else res.status(201).send(doc);
  });
};

const editUser = (req, res, next) => {
  UserModel.findByIdAndUpdate(req.params.id, req.body, (err, doc) => {
    if (err) next(new Error400(err.message));
    else if (doc) {
      res.status(200).send(doc);
    }
  });
};

const deleteUser = (req, res, next) => {
  UserModel.findByIdAndDelete(req.params.id, (err, doc) => {
    if (err) next(new Error400(err.message));
    else if (doc) {
      res.status(204);
    }
  });
};

const setAccountStatus = (req, res, next) => {
  UserModel.findByIdAndUpdate(
    req.params.id,
    { active: req.params.status },
    (err, doc) => {
      if (err) next(new Error400(err.message));
      else if (doc) {
        res.status(200).send(doc);
      }
    }
  );
};

module.exports = {
  getUsers,
  addUser,
  editUser,
  getUserById,
  deleteUser,
  setAccountStatus,
};
