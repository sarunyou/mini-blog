const catchAsync = require("../utils/catchAsync");
const blogService = require("../services/blog.service");
const { StatusCodes } = require("http-status-codes");

const createBlog = catchAsync(async (req, res) => {
  const blog = await blogService.createBlog(req.body);
  res.status(StatusCodes.CREATED).send(blog);
});
const listBlogs = catchAsync(async (req, res) => {
  const blogs = await blogService.listBlogs();
  res.send(blogs);
});
const updateBlog = catchAsync(async (req, res) => {
  const blog = await blogService.updateBlogById(req.params.blogId, req.body);
  res.send(blog);
});
const deleteBlog = catchAsync(async (req, res) => {
  const blog = await blogService.deleteBlogById(req.params.blogId);
  res.send(blog);
});

module.exports = {
  createBlog,
  updateBlog,
  deleteBlog,
  listBlogs,
};