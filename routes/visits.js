const router = require("express").Router();
const visitsController = require("../controllers/visitsController");

router.get('/getPatronsVisits/:patronId',visitsController.getAllVisitsForPatron);
router.get('/getPatronsVisits/:patronId/:days',visitsController.getVisitsWithinTimeframe);
router.get('/getVisitById/:visitId',visitsController.getVisitById);
router.get('/getPatronsLastVisit/:patronId',visitsController.getLastVisitForPatron);
router.post('/addVisit',visitsController.createVisit);
router.get('/validateVisit/:patronId',visitsController.validateVisit);
router.get('/getPatronsWithinTimeframe/:days',visitsController.getAllPatronsWithinTimeframe);
router.delete('/deletePatronsVisits/:patronId',visitsController.deleteAllVisitsForPatron);


module.exports = router;