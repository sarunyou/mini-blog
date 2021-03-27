const catchAsync = require("../utils/catchAsync");
const blogService = require("../services/blog.service");
const { StatusCodes } = require("http-status-codes");
const { BlogsEntity, BlogEntity } = require("../entities/blog.entity");

const createBlog = catchAsync(async (req, res) => {
  const blog = await blogService.createBlog({
    ...req.body,
    userId: req.user.id,
  });
  res.status(StatusCodes.CREATED).send(BlogEntity(blog));
});
const listBlogs = catchAsync(async (req, res) => {
  const blogs = await blogService.listBlogs();
  res.send(BlogsEntity(blogs));
});
const updateBlog = catchAsync(async (req, res) => {
  const blog = await blogService.updateBlogById(req.params.blogId, req.body);
  res.send(BlogEntity(blog));
});
const deleteBlog = catchAsync(async (req, res) => {
  const blog = await blogService.deleteBlogById(req.params.blogId);
  res.send(BlogEntity(blog));
});

module.exports = {
  createBlog,
  updateBlog,
  deleteBlog,
  listBlogs,
};
