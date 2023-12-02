const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { policyService } = require('../services');

const createPolicy = catchAsync(async (req, res) => {
  const policy = await policyService.createPolicy(req.body);
  res.status(httpStatus.CREATED).send(policy);
});

const getPolicies = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await policyService.queryPolicies(filter, options);
  res.send(result);
});

const getPolicy = catchAsync(async (req, res) => {
  const policy = await policyService.getPolicyById(req.params.policyId);
  if (!policy) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Policy not found');
  }
  res.send(policy);
});

const updatePolicy = catchAsync(async (req, res) => {
  const policy = await policyService.updatePolicyById(req.params.policyId, req.body);
  res.send(policy);
});

const deletePolicy = catchAsync(async (req, res) => {
  await policyService.deletePolicyById(req.params.policyId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createPolicy,
  getPolicies,
  getPolicy,
  updatePolicy,
  deletePolicy,
};
