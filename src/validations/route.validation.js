const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createRoute = {
  body: Joi.object().keys({
    busBrand: Joi.string().required().custom(objectId),
    startingPoint: Joi.string().required(),
    endingPoint: Joi.string().required(),
    pickupPointList: Joi.array().items(
      Joi.object().keys({
        pickupPoint: Joi.string().required(),
        price: Joi.number().required(),
      })
    ),
    mainSchedule: Joi.array().items(Joi.object()),
    subSchedule: Joi.array().items(Joi.object()),
  }),
};

const getRoutes = {
  query: Joi.object().keys({
    busBrand: Joi.string().custom(objectId),
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
    routeId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      busBrand: Joi.string().custom(objectId),
      startingPoint: Joi.string(),
      endingPoint: Joi.string(),
      pickupPointList: Joi.array().items(
        Joi.object().keys({
          pickupPoint: Joi.string().required(),
          price: Joi.number().required(),
        })
      ),
      mainSchedule: Joi.array().items(Joi.object()),
      subSchedule: Joi.array().items(Joi.object()),
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
