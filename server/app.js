var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');


var app = express();


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// error handler
app.use(function(err, req, res, next) {
  res.status(err.status || 500).json({
    message: err.message,
  });
});

module.exports = app;
