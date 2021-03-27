const catchAsync = require("../utils/catchAsync");
const blogService = require("../services/blog.service");
const { StatusCodes } = require("http-status-codes");
const { BlogsEntity, BlogEntity } = require("../entities/blog.entity");
/**
 * @swagger
 * /v1/blogs:
 *   post:
 *     tags: [Blog]
 *     summary: Create blog
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               content:
 *                 type: string
 *               status:
 *                 type: string
 *               category:
 *                 type: string
 *     responses:
 *       200:
 *         description: Created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 name:
 *                   type: string
 *                 content:
 *                   type: string
 *                 status:
 *                   type: number
 *                 category:
 *                   type: string
 *   get:
 *     tags: [Blog]
 *     summary: List blogs
 *     responses:
 *       200:
 *         description: List blogs
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   name:
 *                     type: string
 *                   content:
 *                     type: string
 *                   status:
 *                     type: number
 *                   category:
 *                     type: string
 *                   author:
 *                     type: object
 *                     properties:
 *                       name:
 *                         type: string
 *                       id:
 *                         type: number
 */
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

/**
 * @swagger
 * /v1/blogs/{blogId}:
 *   patch:
 *     tags: [Blog]
 *     summary: Update Blog
 *     parameters:
 *       - name: blogId
 *         description: Blog's id.
 *         type: number
 *     responses:
 *       200:
 *         description: Return updated blog
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 name:
 *                   type: string
 *                 content:
 *                   type: string
 *                 status:
 *                   type: number
 *                 category:
 *                   type: string
 */

const updateBlog = catchAsync(async (req, res) => {
  await blogService.validateBlogOwner(req.params.blogId, req.user.id);
  const blog = await blogService.updateBlogById(req.params.blogId, req.body);
  res.send(BlogEntity(blog));
});

/**
 * @swagger
 * /v1/blogs/{blogId}:
 *   delete:
 *     tags: [Blog]
 *     summary: Delete Blog
 *     parameters:
 *       - name: blogId
 *         description: Blog's id.
 *         type: number
 *     responses:
 *       200:
 *         description: Return deleted blog
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 name:
 *                   type: string
 *                 content:
 *                   type: string
 *                 status:
 *                   type: number
 *                 category:
 *                   type: string
 */
const deleteBlog = catchAsync(async (req, res) => {
  await blogService.validateBlogOwner(req.params.blogId, req.user.id);
  const blog = await blogService.deleteBlogById(req.params.blogId);
  res.send(BlogEntity(blog));
});

module.exports = {
  createBlog,
  updateBlog,
  deleteBlog,
  listBlogs,
};
