const Joi = require("joi");

const createUser = {
  body: Joi.object().keys({
    username: Joi.string().required(),
  }),
};

module.exports = {
  createUser,
};
