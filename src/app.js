const express = require('express');
const app = express();
const bodyParser = require('body-parser');
require('dotenv').config();
const router = require('./routes');

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
require('./dbs/init.mongodb');

app.use("/v1", router);

app.use((req, res, next) => {
    const error = new Error("Not Found");
    error.status = 404;
    next(error);
  });

app.use((error, req, res, next) => {
const statusCode = error.status || 500;
return res.status(statusCode).json({
    status: "error",
    code: statusCode,
    stack: error.stack,
    message: error.message || "Internal Sever Error!!",
});
});

module.exports = app;