const router = require("express").Router();
const PatronsController = require("../controllers/patronsController");

router.get('/getPatronById/:patronId',PatronsController.getPatronById);
router.get('/getAllPatrons',PatronsController.getAllPatrons);
router.post('/searchPatrons',PatronsController.searchPatrons);
router.post('/addPatron',PatronsController.addPatron);
router.patch('/updatePatron/:patronId',PatronsController.updatePatron);
router.delete('/deletePatron',PatronsController.deletePatron);

module.exports = router;