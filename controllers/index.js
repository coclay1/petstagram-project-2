const router = require("express").Router();

const apiRoutes = require("./api");
const homeRoutes = require("./home-routes");
const dashRoutes = require("./dash-routes");
const postRoutes = require("./post-routes");

router.use("/", homeRoutes);
router.use("/dashboard", dashRoutes);
router.use("/api", apiRoutes);
router.use("/api/posts", postRoutes);

module.exports = router;
