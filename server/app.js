require("dotenv-safe").config();
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const routerV1 = require("./routes/v1/index");
const { StatusCodes } = require("http-status-codes");

const app = express();
app.use(cors());
app.use(helmet());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use("/v1", routerV1);
// error handler

app.use(errorHandler);

// eslint-disable-next-line no-unused-vars
function errorHandler(err, req, res, next) {
  res.status(err.status || StatusCodes.BAD_REQUEST).json({
    message: err.message,
  });
}

module.exports = app;
