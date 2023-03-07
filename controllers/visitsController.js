const VisitModel = require("../models/visitModel");
const Error400 = require("../api-errors/apiError400");

const getAllVisitsForPatron = async (req, res, next) => {
    VisitModel.find({'patronId':req.params.patronId}).exec((err, docs) => {
    if (err) next(new Error400(err.message));
    else res.status(200).send(docs);
    })

}


const getLastVisitForPatron = async (req, res, next) => {
    VisitModel.find({'patronId':req.params.patronId}).exec((err, docs) => {
        if (err) next(new Error400(err.message));
        else res.status(200).send(docs[docs.length-1]);
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

const getVisitsWithinTimeframe = async (req, res, next) => {
    const daysAgo = Date.now() - req.params.days * millisecondsPerDay;
    VisitModel.find({'patronId':req.params.patronId}).exec((err, docs) => {
        if (err) next(new Error400(err.message));
        else res.status(200).send(docs.filter(doc => {
            return doc.visitDate.getTime() > daysAgo;
        }))
    })
}
const getAllPatronsWithinTimeframe = async (req ,res ,next) => {
    const daysAgo = Date.now() - req.params.days * millisecondsPerDay;
    VisitModel.find().exec((err, docs) => {
        if (err) next(new Error400(err.message));
        else res.status(200).send(docs.filter(doc => doc.visitDate.getTime() > daysAgo).map(doc => doc.patronId));

    })

}

const validateVisit = (req, res, next) => {
    VisitModel.find({'patronId':req.params.patronId}).exec((err, docs) => {
    if (err) next(new Error400(err.message));
    else {

        const latestVisit = docs[docs.length-1]
        const timeSinceLastVisit = Date.now() - latestVisit.visitDate.getTime();; //in milliseconds
        const daysSinceLastVisit = timeSinceLastVisit/millisecondsPerDay;

        const validVisit = daysSinceLastVisit>requiredWaitingDays

        res.status(200).send({
            latestVisit,
            daysSinceLastVisit,
            validVisit,
            message: `it has been ${validVisit?"more":"less"} than ${requiredWaitingDays} days since the last visit.`
        });
    }
    })


}

module.exports = {
    getAllVisitsForPatron,
    getLastVisitForPatron,
    getVisitsWithinTimeframe,
    getAllPatronsWithinTimeframe,
    getVisitById,
    createVisit,
    validateVisit,
    deleteAllVisitsForPatron
}