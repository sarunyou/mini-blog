var express = require("express");
var router = express.Router();
const blogController = require("../../controllers/blog.controller");
const validate = require("../../middlewares/validate");
const {
  createBlog,
  updateBlog,
  deleteBlog,
} = require("../../validations/blog.validation");

router
  .get("/", blogController.listBlogs)
  .post("/", validate(createBlog), blogController.createBlog)
  .patch("/:blogId", validate(updateBlog), blogController.updateBlog)
  .delete("/:blogId", validate(deleteBlog), blogController.deleteBlog);

module.exports = router;
