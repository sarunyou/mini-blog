const catchAsync = require("../utils/catchAsync");
const authService = require("../services/auth.service");

const singIn = catchAsync(async (req, res) => {
  await authService.singIn(req.body);
  res.send({});
});

module.exports = {
  singIn,
};
