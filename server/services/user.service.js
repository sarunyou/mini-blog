const bcrypt = require("bcryptjs");
const { userRepository } = require("../repositories/user.repository");
const getUserByName = (name) => {
  return userRepository.findOne({
    where: {
      name,
    },
  });
};

const generateUserByName = async (userBody) => {
  const saltRounds = 10;
  const password = (await bcrypt.hashSync(userBody.name, saltRounds)).slice(
    0,
    6
  );

  await userRepository.create({
    name: userBody.name,
    password,
  });

  return password;
};

module.exports = {
  getUserByName,
  generateUserByName,
};
