const router = require("express").Router();
const userControllers = require("../controllers/usersController");

router.get("/", userControllers.getUsers);

module.exports = router;