var express = require("express");
const validate = require("../../middlewares/validate");
const { createUser } = require("../../validations/user.validation");
const userController = require("../../controllers/user.controller");

var router = express.Router();

router.post(
  "/generate-user",
  validate(createUser),
  userController.generateUser
);

module.exports = router;
