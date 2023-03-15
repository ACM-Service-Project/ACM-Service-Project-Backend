const router = require("express").Router();
const rolesController = require("../controllers/rolesController");

router.get("/getAllRoles", rolesController.getAllRoles);
router.get("/getRoleById/:id", rolesController.getRoleById);
router.get("/createRole", rolesController.createRole);

module.exports = router;