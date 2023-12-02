const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createRoute = {
  body: Joi.object().keys({
    busBrand: Joi.string().required().custom(objectId),
    startingPoint: Joi.string().required(),
    endingPoint: Joi.string().required(),
    schedule: Joi.array().items(Joi.object()), // Adjust the schema for schedule based on your actual requirements
  }),
};

const getRoutes = {
  query: Joi.object().keys({
    startingPoint: Joi.string(),
    endingPoint: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getRoute = {
  params: Joi.object().keys({
    routeId: Joi.string().custom(objectId),
  }),
};

const updateRoute = {
  params: Joi.object().keys({
    routeId: Joi.string().required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      busBrand: Joi.string().custom(objectId),
      startingPoint: Joi.string(),
      endingPoint: Joi.string(),
      schedule: Joi.array().items(Joi.object()), // Adjust the schema for schedule based on your actual requirements
    })
    .min(1),
};

const deleteRoute = {
  params: Joi.object().keys({
    routeId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createRoute,
  getRoutes,
  getRoute,
  updateRoute,
  deleteRoute,
};