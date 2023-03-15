const RoleModel = require("../models/roleModel");
const Error400 = require("../api-errors/apiError400");

const getAllRoles = (req, res, next) => {
    RoleModel.find().exec((err, docs) => {
    if (err) next(new Error400(err.message));
    else res.status(200).send(docs);
    })
}

const getRoleById = (req, res, next) => {
    RoleModel.findById(req.params.id, (err, doc) => {
    if (err) next(new Error400(err.message));
    else res.status(200).send(doc);
    })
}

// Did I do this right? Why is it exit status 201, 
// what does req.body do, and should createRole look
// more like createVisit or addUser?
const createRole = (req, res, next) => {
    RoleModel.create(req.body, (err, doc) => {
    if (err) next(new Error400(err.message));
    else res.status(201).send(doc);
    });
}

module.exports = {
    getAllRoles,
    getRoleById,
    createRole
}