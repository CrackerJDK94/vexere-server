const Joi = require("joi");
const { password, objectId } = require("./custom.validation");

const createUser = {
  body: Joi.object().keys({
    walletAddress: Joi.string().required(),
    role: Joi.string().required().valid("user", "admin"),
    stamina: Joi.number().integer(),
    name: Joi.string(),
    language: Joi.string(),
    soundBackgound: Joi.boolean(),
    soundEffect: Joi.boolean(),
    newPlayer: Joi.boolean(),
  }),
};

const getUsers = {
  query: Joi.object().keys({
    name: Joi.string(),
    role: Joi.string(),
    walletAddress: Joi.string(),
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

const checkUserAlreadyExist = {
  params: Joi.object().keys({
    walletAddress: Joi.string(),
  }),
};

const updateUser = {
  body: Joi.object()
    .keys({
      name: Joi.string(),
      language: Joi.string(),
      soundBackgound: Joi.boolean(),
      soundEffect: Joi.boolean(),
      newPlayer: Joi.boolean(),
    })
    .min(1),
};

const deleteUser = {
  params: Joi.object().keys({
    userId: Joi.string().custom(objectId),
  }),
};

const getSignedUrl = {
  query: Joi.object().keys({
    fileName: Joi.string().required(),
    fileType: Joi.string().required(),
  }),
};

const changeAvatar = {
  body: Joi.object().keys({
    fileName: Joi.string().required(),
  }),
};

module.exports = {
  createUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
  checkUserAlreadyExist,
  getSignedUrl,
  changeAvatar,
};
