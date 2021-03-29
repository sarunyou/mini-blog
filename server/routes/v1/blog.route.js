var express = require("express");
var router = express.Router();
const blogController = require("../../controllers/blog.controller");
const { authenticateToken } = require("../../middlewares/authentication");
const validate = require("../../middlewares/validate");
const {
  createBlog,
  updateBlog,
  deleteBlog,
} = require("../../validations/blog.validation");

router
  .get("/", blogController.listBlogs)
  .post("/", authenticateToken, validate(createBlog), blogController.createBlog)
  .patch(
    "/:blogId",
    authenticateToken,
    validate(updateBlog),
    blogController.updateBlog
  )
  .delete(
    "/:blogId",
    authenticateToken,
    validate(deleteBlog),
    blogController.deleteBlog
  );

module.exports = router;
