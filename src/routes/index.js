const express = require("express");
const router = express.Router();

router.use("answer", require("./userAnswer"));
router.use("/question", require("./question"));

module.exports = router;
