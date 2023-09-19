const express = require("express");
const router = express.Router();

router.use('/anwer', require('./anwer'))
router.use('/question', require('./question'))

module.exports = router;