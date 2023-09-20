const express = require("express");
const questionController = require("../../controllers/question.controller");
const router = express.Router();

router.get("", questionController.getQuestion);
router.post("", questionController.createQuestion);

module.exports = router;
