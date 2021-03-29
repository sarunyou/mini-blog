var express = require("express");
const validate = require("../../middlewares/validate");
const { createUser } = require("../../validations/user.validation");
const userController = require("../../controllers/user.controller");
const { authenticateToken } = require("../../middlewares/authentication");

var router = express.Router();

router.post("/", validate(createUser), userController.generateUser);
router.get("/me", authenticateToken, userController.getMe);

module.exports = router;
