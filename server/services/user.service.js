const bcrypt = require("bcryptjs");
const { user: UserModel } = require("../db/sequelize");

const getUserByName = (name) => {
  return UserModel.findOne({
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

  await UserModel.create({
    name: userBody.name,
    password,
  });

  return password;
};

module.exports = {
  getUserByName,
  generateUserByName,
};
