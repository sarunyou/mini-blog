const Joi = require("joi");

const createBlog = {
  body: Joi.object().keys({
    name: Joi.string().min(5).max(99).required(),
    status: Joi.number().required(),
    content: Joi.string().min(5).max(500).required(),
    category: Joi.string().min(5).max(99).required(),
  }),
};

const updateBlog = {
  body: Joi.object().keys({
    name: Joi.string().min(5).max(99).required(),
    status: Joi.number(),
    content: Joi.string().min(5).max(500).required(),
    category: Joi.string().min(5).max(99).required(),
  }),
  params: {
    blogId: Joi.number().required(),
  },
};

const deleteBlog = {
  params: {
    blogId: Joi.number().required(),
  },
};

module.exports = {
  createBlog,
  updateBlog,
  deleteBlog,
};
