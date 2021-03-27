const { UserEntity } = require("./user.entity");
const BlogEntity = (data) => {
  return {
    id: data.id,
    name: data.name,
    status: data.status,
    content: data.content,
    category: data.category,
    author: data.author && UserEntity(data.author),
  };
};

const BlogsEntity = (data) => {
  return data.map(BlogEntity);
};

module.exports = {
  BlogsEntity,
  BlogEntity,
};
