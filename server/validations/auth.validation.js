const Joi = require("joi");

const singIn = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    password: Joi.number().required(),
  }),
};

module.exports = {
  singIn,
};
