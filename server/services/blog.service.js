const { blogRepository } = require("../repositories/blog.repository");
const { user: UserModel } = require("../db/sequelize");
const createHttpError = require("http-errors");

const createBlog = (createBody) => {
  return blogRepository.create(createBody);
};

const validateBlogOwner = async (blogId, userId) => {
  const blog = await blogRepository.findOne({
    where: {
      id: blogId,
    },
  });

  if (!blog) {
    throw new createHttpError.NotFound("Blog not found");
  }

  if (blog.userId !== userId) {
    throw new createHttpError.NotFound("Allow only owner");
  }
};

const updateBlogById = async (blogId, updateBody) => {
  const blog = await blogRepository.findOne({
    where: {
      id: blogId,
    },
  });

  if (!blog) {
    throw new createHttpError.NotFound("Blog not found");
  }

  Object.assign(blog, updateBody);
  await blog.save();
  return blog;
};

const deleteBlogById = async (blogId) => {
  const blog = await blogRepository.findOne({
    where: {
      id: blogId,
    },
  });

  if (!blog) {
    throw new createHttpError.NotFound("Blog not found");
  }

  return blog.destroy();
};

const listBlogs = () => {
  return blogRepository.findAll({
    include: [
      {
        model: UserModel,
        as: "author",
      },
    ],
  });
};

module.exports = {
  createBlog,
  listBlogs,
  updateBlogById,
  deleteBlogById,
  validateBlogOwner,
};
