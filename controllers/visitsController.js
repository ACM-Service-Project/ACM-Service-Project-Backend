const VisitModel = require("../models/visitModel");
const Error400 = require("../api-errors/apiError400");

const getAllVisitsForPatron = async (req, res, next) => {
    VisitModel.find({'patronId':req.params.patronId}).exec((err, docs) => {
    if (err) next(new Error400(err.message));
    else res.status(200).send(docs);
    })

}
const deleteAllVisitsForPatron = async (req, res, next) => {
    VisitModel.deleteMany({'patronId':req.params.patronId},(err, doc) => {
        if (err) next(new Error400(err.message));
        else res.status(204).send(doc)
    })
}

const getVisitById = (req, res, next) => {
    VisitModel.findById(req.params.visitId, (err, doc) => {
        if (err) next(new Error400(err.message));
        else res.status(200).send(doc);
    })
}

const createVisit = (req, res, next) => {
    VisitModel.create({
        visitDate: new Date(),
        patronId: req.body.patronId
    }, (err, doc) => {
        if (err) next(new Error400(err.message));
        else res.status(201).send(doc);
    })
}

//DATE CONSTANTS
const millisecondsPerMinute = 60000
const millisecondsPerDay = millisecondsPerMinute * 60 * 24;
const requiredWaitingDays = 2;

const validateVisit = (req, res, next) => {
    VisitModel.find({'patronId':req.params.patronId}).exec((err, docs) => {
    if (err) next(new Error400(err.message));
    else {

        const latestVisitDate = docs[docs.length-1].visitDate.getTime();
        const timeSinceLastVisit = Date.now() - latestVisitDate; //in milliseconds
        const daysSinceVisit = timeSinceLastVisit/millisecondsPerDay;

        const validVisit = daysSinceVisit>requiredWaitingDays

        res.status(200).send({
            daysSinceVisit,
            validVisit,
            message: `it has been ${validVisit?"more":"less"} than ${requiredWaitingDays} days since your last visit.`
        });
    }
    })


}

module.exports = {
    getAllVisitsForPatron,
    getVisitById,
    createVisit,
    validateVisit,
    deleteAllVisitsForPatron
}