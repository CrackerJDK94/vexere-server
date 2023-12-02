const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createPolicy = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    coverageAmount: Joi.number().min(0).required(),
    durationInYears: Joi.number().min(1).required(),
    startDate: Joi.date().required(),
    endDate: Joi.date().required(),
  }),
};

const getPolicies = {
  query: Joi.object().keys({
    name: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getPolicy = {
  params: Joi.object().keys({
    policyId: Joi.string().custom(objectId),
  }),
};

const updatePolicy = {
  params: Joi.object().keys({
    policyId: Joi.string().required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      name: Joi.string(),
      coverageAmount: Joi.number().min(0),
      durationInYears: Joi.number().min(1),
      startDate: Joi.date(),
      endDate: Joi.date(),
    })
    .min(1),
};

const deletePolicy = {
  params: Joi.object().keys({
    policyId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createPolicy,
  getPolicies,
  getPolicy,
  updatePolicy,
  deletePolicy,
};