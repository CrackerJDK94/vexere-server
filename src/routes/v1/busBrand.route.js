const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const busBrandValidation = require('../../validations/busBrand.validation');
const busBrandController = require('../../controllers/busBrand.controller');

const router = express.Router();

router
  .route('/')
  .post(auth('manageBusBrands'), validate(busBrandValidation.createBusBrand), busBrandController.createBusBrand)
  .get(auth('getBusBrands'), validate(busBrandValidation.getBusBrands), busBrandController.getBusBrands);

router
  .route('/:busBrandId')
  .get(auth('getBusBrands'), validate(busBrandValidation.getBusBrand), busBrandController.getBusBrand)
  .patch(auth('manageBusBrands'), validate(busBrandValidation.updateBusBrand), busBrandController.updateBusBrand)
  .delete(auth('manageBusBrands'), validate(busBrandValidation.deleteBusBrand), busBrandController.deleteBusBrand);

module.exports = router;
