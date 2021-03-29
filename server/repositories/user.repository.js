const { user: UserModel } = require("../db/sequelize");
const { createRepository } = require("./base.repository");
const userRepository = createRepository(UserModel);

module.exports = {
  userRepository,
};
