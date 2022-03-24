const Joi = require("joi");

const createUser = {
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    username: Joi.string().required(),
    phone: Joi.string().required(),
    company: Joi.string(),
    message: Joi.string().required(),
  }),
};


module.exports = {
  createUser,
};
