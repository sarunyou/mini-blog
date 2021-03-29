const bcrypt = require("bcryptjs");
const faker = require("faker");
const createHttpError = require("http-errors");
const { userRepository } = require("../repositories/user.repository");
const getUserByUsername = (username) => {
  return userRepository.findOne({
    where: {
      username,
    },
  });
};

const generateUserByName = async (userBody) => {
  const user = await getUserByUsername(userBody.username);

  if (user) {
    throw new createHttpError.BadRequest("Duplicate username");
  }

  const password = faker.finance.mask();

  await userRepository.create({
    username: userBody.username,
    password,
  });

  return password;
};

module.exports = {
  getUserByUsername,
  generateUserByName,
};
