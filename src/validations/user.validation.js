const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createUser = {
  body: Joi.object().keys({
    account: Joi.string().required(),
    _name: Joi.string().required(),
    _email: Joi.string().required().email(),
    phone: Joi.number().required(),
    password: Joi.string().required().min(8).regex(/^(?=.*[a-zA-Z])(?=.*\d)/)
      .message('Password must contain at least one letter and one number'),
    role: Joi.string().valid('user', 'admin'),
  }),
};

const getUsers = {
  query: Joi.object().keys({
    account: Joi.string(),
    _name: Joi.string(),
    _email: Joi.string().email(),
    phone: Joi.number(),
    role: Joi.string().valid('user', 'admin'),
    isEmailVerified: Joi.boolean(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getUser = {
  params: Joi.object().keys({
    userId: Joi.string().custom(objectId),
  }),
};

const updateUser = {
  params: Joi.object().keys({
    userId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      account: Joi.string(),
      _name: Joi.string(),
      _email: Joi.string().email(),
      phone: Joi.number(),
      password: Joi.string().min(8).regex(/^(?=.*[a-zA-Z])(?=.*\d)/)
        .message('Password must contain at least one letter and one number'),
      role: Joi.string().valid('user', 'admin'),
      isEmailVerified: Joi.boolean(),
    })
    .min(1),
};

const deleteUser = {
  params: Joi.object().keys({
    userId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
};
