const catchAsync = require("../utils/catchAsync");
const userService = require("../services/user.service");
const { UserEntity } = require("../entities/user.entity");
const generateUser = catchAsync(async (req, res) => {
  const password = await userService.generateUserByName(req.body);
  res.send({ password });
});

const getMe = catchAsync(async (req, res) => {
  const user = await userService.getUserByName(req.user.name);
  res.send(UserEntity(user));
});

module.exports = {
  generateUser,
  getMe,
};
