const Joi = require("joi");

const createUser = {
  body: Joi.object().keys({
    name: Joi.string().required(),
  }),
};

module.exports = {
  createUser,
};
