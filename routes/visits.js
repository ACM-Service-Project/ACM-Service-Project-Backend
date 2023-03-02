const router = require("express").Router();
const visitsController = require("../controllers/visitsController");

router.get('/getAllVisitsForPatron/:patronId',visitsController.getAllVisitsForPatron);
router.get('/getVisitById/:visitId',visitsController.getVisitById);
router.post('/addVisit',visitsController.createVisit);
router.get('/validateVisit/:patronId',visitsController.validateVisit);
router.delete('/deleteAllVisitsForPatron/:patronId',visitsController.deleteAllVisitsForPatron);

module.exports = router;