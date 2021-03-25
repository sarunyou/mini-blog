const Joi = require('joi');

const createUser = Joi.object({
  body: Joi.object().keys({
    name: Joi.string().required(),
  }),
});

module.exports = {
  createUser
}