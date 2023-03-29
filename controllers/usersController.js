const UserModel = require("../models/userModel");
const Error400 = require("../api-errors/apiError400");
const Error404 = require("../api-errors/apiError404");
const Error401 = require("../api-errors/apiError401");
const jwt = require("jsonwebtoken");
const encrypt = require("../utilities/encrypt");
const bcrypt = require("bcrypt")

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

const addUser = async (req, res, next) => {
  const hashedPassword = await encrypt(req.body.password);

  const newUser = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    username: req.body.username,
    password: hashedPassword,
    phone: req.body.phone,
    email: req.body.email,
  };

  UserModel.create(newUser, (err, doc) => {
    if (err) next(new Error400(err.message));
    else {
      const jsonwebtoken = jwt.sign(
        {
          email: doc.email,
          id: doc._id,
        },
        process.env.JWT_SECRET_KEY,
        { expiresIn: "1h" }
      );
      res.status(201).send({
        token: jsonwebtoken,
        userId: doc._id,
      });
    }
  });
};

const searchUsers = async (req, res, next) => {
  UserModel.find(req.body).exec((err, docs) => {
    if (err) next(new Error400(err.message));
    else res.status(200).send(docs);
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

const login = (req, res, next) => {
  let accountInfo;
  UserModel.findOne({ username: req.body.username })
    .then((account) => {
      if (!account) next(new Error404("Account not found"));
      else {
        accountInfo = account;
        return bcrypt.compare(req.body.password, accountInfo.password);
      }
    })
    .then((match) => {
      if (!match) next(new Error401("Incorrect Password"));
      else {
        const jsonwebtoken = jwt.sign(
          {
            email: accountInfo.email,
            id: accountInfo._id,
          },
          process.env.JWT_SECRET_KEY,
          { expiresIn: "1h" }
        );
        res.status(200).send({
          token: jsonwebtoken,
          userId: accountInfo._id,
        });
      }
    });
};

module.exports = {
  getUsers,
  addUser,
  searchUsers,
  editUser,
  getUserById,
  deleteUser,
  setAccountStatus,
  login,
};
