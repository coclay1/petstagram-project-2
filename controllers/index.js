const router = require("express").Router();

const apiRoutes = require("./api");
const homeRoutes = require("./home-routes");
const dashRoutes = require("./dash");


router.use("/", homeRoutes);
// router.use("/dashboard", dashRoutes);
router.use("/api", apiRoutes);


module.exports = router;
