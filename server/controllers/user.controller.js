const catchAsync = require("../utils/catchAsync");
const userService = require("../services/user.service");
const generateUser = catchAsync(async (req, res) => {
  const user = await userService.generateUserByName(req.body);
  res.send({ password: user.password });
});

module.exports = {
  generateUser,
};
