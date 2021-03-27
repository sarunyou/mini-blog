var jwt = require("jsonwebtoken");
const createError = require("http-errors");
const userService = require("./user.service");

const singIn = async ({ name, password }) => {
  const user = await userService.getUserByName(name);
  if (!user || !(await user.isSamePassword(password))) {
    throw new createError.BadRequest("Incorrect password");
  }
  var token = jwt.sign({ user }, process.env.SECRET_JWT);
  return token;
};

module.exports = {
  singIn,
};
