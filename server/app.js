var express = require("express");
var cors = require("cors");
require("dotenv-safe").config();
// Databases
require("./db/sequelize");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const routerV1 = require("./routes/v1/index");

var app = express();
app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use("/v1", routerV1);
// error handler
app.use(function (err, req, res, next) {
  res.status(err.status || 400).json({
    message: err.message,
  });
});

module.exports = app;