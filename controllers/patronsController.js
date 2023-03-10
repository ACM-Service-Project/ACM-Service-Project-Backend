const PatronModel = require("../models/patronModel");
const Error400 = require("../api-errors/apiError400");


const getPatronById = async (req, res, next) => {
    PatronModel.findById(req.params.patronId).exec((err, doc) => {
        if (err) next(new Error400(err.message));
        else res.status(200).send(doc);
    })
}

const getAllPatrons = async (req, res, next) => {
    PatronModel.find().exec((err, docs) => {
        if (err) next(new Error400(err.message));
        else res.status(200).send(docs)
    })
}

const searchPatrons = async (req, res, next) => {
    PatronModel.find(req.body).exec((err, docs) => {
        if (err) next(new Error400(err.message));
        else res.status(200).send(docs);
    })
}

const addPatron = async (req, res, next) => {
    PatronModel.create(req.body,(err,doc) => {
        if (err) next(new Error400(err.message));
        else res.status(201).send(doc);
    })
}


const updatePatron = async (req, res, next) => {
  PatronModel.findByIdAndUpdate(req.params.patronId, {$set:req.body}).exec((err, doc) => {
    if (err) next(new Error400(err.message));
    else if (doc) {
      res.status(200).send(doc);
    }
  });
};

const deletePatron = async (req, res, next) => {
    PatronModel.findByIdAndDelete(req.params.patronId,(err, doc) => {
    if (err) next(new Error400(err.message));
    else if (doc) {
      res.status(204).send(doc);
    }
  })
}

module.exports = {
    getPatronById,
    addPatron,
    getAllPatrons,
    searchPatrons,
    updatePatron,
    deletePatron
}