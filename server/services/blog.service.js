const { blogRepository } = require("../repositories/blog.repository");

const createBlog = (createBody) => {
  return blogRepository.create(createBody);
};

const updateBlogById = (blogId, updateBody) => {
  return blogRepository.update(updateBody, {
    where: {
      id: blogId,
    },
  });
};

const deleteBlogById = (blogId) => {
  return blogRepository.destroy({
    where: {
      id: blogId,
    },
  });
};

const listBlogs = () => {
  return blogRepository.findAll();
};

module.exports = {
  createBlog,
  listBlogs,
  updateBlogById,
  deleteBlogById,
};
