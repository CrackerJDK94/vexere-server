const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createVihicleTransport = {
  body: Joi.object().keys({
    busBrand: Joi.string().required().custom(objectId),
    name: Joi.string().required(),
    images: Joi.array().items(Joi.string().required()), // Assuming images is an array of strings, adjust as needed
    idBus: Joi.string().required(),
  }),
};

const getVihicleTransports = {
  query: Joi.object().keys({
    busBrand: Joi.string().custom(objectId),
    name: Joi.string(),
    images: Joi.array().items(Joi.string()),
    idBus: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getVihicleTransport = {
  params: Joi.object().keys({
    vihicleId: Joi.string().custom(objectId),
  }),
};

const updateVihicleTransport = {
  params: Joi.object().keys({
    vihicleId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      busBrand: Joi.string().custom(objectId),
      name: Joi.string(),
      images: Joi.array().items(Joi.string().required()), // Assuming images is an array of strings, adjust as needed
      idBus: Joi.string(),
    })
    .min(1),
};

const deleteVihicleTransport = {
  params: Joi.object().keys({
    vihicleId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createVihicleTransport,
  getVihicleTransports,
  getVihicleTransport,
  updateVihicleTransport,
  deleteVihicleTransport,
};
