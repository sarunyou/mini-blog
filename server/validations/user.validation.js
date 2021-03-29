const Joi = require("joi");

const createUser = {
  body: Joi.object().keys({
    username: Joi.string().min(5).max(100).required(),
  }),
};

module.exports = {
  createUser,
};
