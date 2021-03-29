require("dotenv-safe").config();
const express = require("express");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const cors = require("cors");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const routerV1 = require("./routes/v1/index");
const { StatusCodes } = require("http-status-codes");
const swaggerDefinition = require("./swaggerDefinition");
// Options for the swagger docs
const options = {
  // Import swaggerDefinitions
  swaggerDefinition,
  // Path to the API docs
  // Note that this path is relative to the current directory from which the Node.js is ran, not the application itself.
  apis: ["./controllers/*.js"],
};

const swaggerSpec = swaggerJsdoc(options);
const app = express();
app.use(cors());
app.use(helmet());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
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
