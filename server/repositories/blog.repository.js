const { blog: BlogModel } = require("../db/sequelize");
const { createRepository } = require("./base.repository");
const blogRepository = createRepository(BlogModel);

module.exports = {
  blogRepository,
};
