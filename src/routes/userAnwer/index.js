const express = require("express");
const anwerController = require("../../controllers/anwer.controller");
const router = express.Router();

router.post('', anwerController.userAnswer)

module.exports = router;