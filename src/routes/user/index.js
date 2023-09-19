const express = require("express");
const userController = require("../../controllers/anwer.controller");
const router = express.Router();

router.post("/user", userController.userAnswer);

module.exports = router;