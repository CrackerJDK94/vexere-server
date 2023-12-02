const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const policyValidation = require('../../validations/policy.validation');
const policyController = require('../../controllers/policy.controller');

const router = express.Router();

router
  .route('/')
  .post(auth('managePolicies'), validate(policyValidation.createPolicy), policyController.createPolicy)
  .get(auth('getPolicies'), validate(policyValidation.getPolicies), policyController.getPolicies);

router
  .route('/:policyId')
  .get(auth('getPolicies'), validate(policyValidation.getPolicy), policyController.getPolicy)
  .patch(auth('managePolicies'), validate(policyValidation.updatePolicy), policyController.updatePolicy)
  .delete(auth('managePolicies'), validate(policyValidation.deletePolicy), policyController.deletePolicy);

module.exports = router;
