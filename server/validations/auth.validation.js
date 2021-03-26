const Joi = require("joi");

const singIn = {
  body: Joi.object({
    name: Joi.string().required(),
    password: Joi.number().required(),
  }),
};

module.exports = {
  singIn,
};
