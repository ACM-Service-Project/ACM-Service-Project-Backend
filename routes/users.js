const router = require("express").Router();
const userControllers = require("../controllers/usersController");

router.get("/getAllUsers", userControllers.getUsers);
router.get("/getUserById/:id", userControllers.getUserById);
router.post("/addUser", userControllers.addUser);
router.delete("/delete/:id", userControllers.deleteUser);
router.put("/setAccountStatus/:id/:status", userControllers.setAccountStatus);
router.put("/editUser/:id", userControllers.editUser);
router.post("/login", userControllers.login)

module.exports = router;
