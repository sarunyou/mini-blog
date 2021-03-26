const catchAsync = require("../utils/catchAsync");
const authService = require("../services/auth.service");

const singIn = catchAsync(async (req, res) => {
  const token = await authService.singIn(req.body);
  res.status(200).send({
    token,
  });
});

module.exports = {
  singIn,
};
