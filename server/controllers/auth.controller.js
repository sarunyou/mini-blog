const catchAsync = require("../utils/catchAsync");
const authService = require("../services/auth.service");
const generateUser = catchAsync(async (req, res, next) => {
  const password = await authService.generateUser(req.body.name);
  return password;
});

module.exports = {
  generateUser,
};
