const { UserEntity } = require("./user.entity");
const BlogEntity = (data) => {
  if (!data) return {};
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
  if (!data) return [];
  return data.map(BlogEntity);
};

module.exports = {
  BlogsEntity,
  BlogEntity,
};
