const express = require('express');
const app = express();
const bodyParser = require('body-parser');
require('dotenv').config();
const router = require('./routes');

app.use(bodyParser.json());
require('./dbs/init.mongodb');

app.use("/v1", router);

module.exports = app;