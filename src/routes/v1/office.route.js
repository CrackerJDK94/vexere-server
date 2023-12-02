const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const officeValidation = require('../../validations/office.validation');
const officeController = require('../../controllers/office.controller');

const router = express.Router();

router
  .route('/')
  .post(auth('manageOffices'), validate(officeValidation.createOffice), officeController.createOffice)
  .get(auth('getOffices'), validate(officeValidation.getOffices), officeController.getOffices);

router
  .route('/:officeId')
  .get(auth('getOffices'), validate(officeValidation.getOffice), officeController.getOffice)
  .patch(auth('manageOffices'), validate(officeValidation.updateOffice), officeController.updateOffice)
  .delete(auth('manageOffices'), validate(officeValidation.deleteOffice), officeController.deleteOffice);

module.exports = router;
