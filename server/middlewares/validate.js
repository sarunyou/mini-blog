const Joi = require('joi');
const createError = require('http-errors');
const { pick } = require('rambda');

const validate = (schema) => (req, res, next) => {
  const validSchema = pick(['params', 'query', 'body'], schema);
  const object = pick(Object.keys(validSchema), req);
  const { value, error } = schema.validate(object)

  if (error) {
    const errorMessage = error.details.map((details) => details.message).join(', ');
    return next(new createError(400, { message: errorMessage }));
  }

  return next();
};

module.exports = validate;