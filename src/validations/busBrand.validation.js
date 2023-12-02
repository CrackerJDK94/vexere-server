const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createOffice = {
  body: Joi.object().keys({
    busBrand: Joi.string().required().custom(objectId),
    name: Joi.string().required(),
    address: Joi.string().required(),
    provinceOrCity: Joi.string().required(),
    district: Joi.string().required(),
    images: Joi.array().items(Joi.string()).default([]),
    phone: Joi.number().required(),
    location: Joi.array().items(Joi.number().min(0)).length(2).required(),
  }),
};

const getOffices = {
  query: Joi.object().keys({
    name: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getOffice = {
  params: Joi.object().keys({
    officeId: Joi.string().custom(objectId),
  }),
};

const updateOffice = {
  params: Joi.object().keys({
    officeId: Joi.string().required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      busBrand: Joi.string().custom(objectId),
      name: Joi.string(),
      address: Joi.string(),
      provinceOrCity: Joi.string(),
      district: Joi.string(),
      images: Joi.array().items(Joi.string()),
      phone: Joi.number(),
      location: Joi.array().items(Joi.number().min(0)).length(2),
    })
    .min(1),
};

const deleteOffice = {
  params: Joi.object().keys({
    officeId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createOffice,
  getOffices,
  getOffice,
  updateOffice,
  deleteOffice,
};
