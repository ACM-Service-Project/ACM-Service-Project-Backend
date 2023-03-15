const router = require("express").Router();

router.use("/users", require("./users"));
// router.use("/patrons", require("./patrons"));
router.use("/roles", require("./roles"));
// router.use("/user-roles", require("./userRoles"));
router.use("/visits", require("./visits"));

module.exports = router;
