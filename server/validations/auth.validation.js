const Joi = require("joi");

const singIn = {
  body: Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required(),
  }),
};

module.exports = {
  singIn,
};
