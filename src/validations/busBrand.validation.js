const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createBusBrand = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    account: Joi.string().required().custom(objectId),
    email: Joi.string().required().email(),
    logo: Joi.string().required(),
    phone: Joi.number().required(),
  }),
};

const getBusBrands = {
  query: Joi.object().keys({
    name: Joi.string(),
    account: Joi.string().custom(objectId),
    email: Joi.string().email(),
    logo: Joi.string(),
    phone: Joi.number(),
    isActive: Joi.boolean(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getBusBrand = {
  params: Joi.object().keys({
    busBrandId: Joi.string().custom(objectId),
  }),
};

const updateBusBrand = {
  params: Joi.object().keys({
    busBrandId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      name: Joi.string(),
      account: Joi.string().custom(objectId),
      email: Joi.string().email(),
      logo: Joi.string(),
      phone: Joi.number(),
      isActive: Joi.boolean(),
    })
    .min(1),
};

const deleteBusBrand = {
  params: Joi.object().keys({
    busBrandId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createBusBrand,
  getBusBrands,
  getBusBrand,
  updateBusBrand,
  deleteBusBrand,
};
