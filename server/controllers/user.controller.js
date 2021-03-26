const catchAsync = require("../utils/catchAsync");
const userService = require("../services/user.service");
const generateUser = catchAsync(async (req, res) => {
  const user = await userService.generateUserByName(req.body);
  res.send({ password: user.password });
});

const getMe = catchAsync(async (req, res) => {
  const user = await userService.getUserByName(req.user.name);
  res.send(user);
});

module.exports = {
  generateUser,
  getMe,
};
