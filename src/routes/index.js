const express = require("express");
const router = express.Router();

router.use('/anwer', require('./userAnwer'))
router.use('/question', require('./question'))

module.exports = router;