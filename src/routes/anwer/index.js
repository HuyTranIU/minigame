const express = require("express");
const anwerController = require("../../controllers/anwer.controller");
const router = express.Router();

router.use('', anwerController.userAnswer)

module.exports = router;