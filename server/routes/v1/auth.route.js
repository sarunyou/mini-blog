var express = require("express");
var router = express.Router();
const { singIn } = require("../../validations/auth.validation");
const authController = require("../../controllers/auth.controller");
const validate = require("../../middlewares/validate");

router.post("/sign-in", validate(singIn), authController.singIn);

module.exports = router;
