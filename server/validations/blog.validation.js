const Joi = require("joi");

const createBlog = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    status: Joi.number().required(),
    content: Joi.string().required(),
    category: Joi.string().required(),
  }),
};

const updateBlog = {
  body: Joi.object().keys({
    name: Joi.string(),
    status: Joi.number(),
    content: Joi.string(),
    category: Joi.string(),
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
