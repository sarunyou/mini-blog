const Joi = require("joi");

const singIn = {
  body: Joi.object({
    name: Joi.string().required(),
    password: Joi.string().required(),
  }),
};

module.exports = {
  singIn,
};
