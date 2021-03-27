const bcrypt = require("bcryptjs");
const { userRepository } = require("../repositories/user.repository");
const getUserByName = (username) => {
  return userRepository.findOne({
    where: {
      username,
    },
  });
};

const generateUserByName = async (userBody) => {
  const saltRounds = 10;
  const password = (await bcrypt.hashSync(userBody.username, saltRounds)).slice(
    0,
    6
  );

  await userRepository.create({
    username: userBody.username,
    password,
  });

  return password;
};

module.exports = {
  getUserByName,
  generateUserByName,
};
