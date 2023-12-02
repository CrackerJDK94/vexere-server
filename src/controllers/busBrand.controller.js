const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { busBrandService } = require('../services');

const createBusBrand = catchAsync(async (req, res) => {
  const busBrand = await busBrandService.createBusBrand(req.body);
  res.status(httpStatus.CREATED).send(busBrand);
});

const getBusBrands = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await busBrandService.queryBusBrands(filter, options);
  res.send(result);
});

const getBusBrand = catchAsync(async (req, res) => {
  const busBrand = await busBrandService.getBusBrandById(req.params.busBrandId);
  if (!busBrand) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Bus brand not found');
  }
  res.send(busBrand);
});

const updateBusBrand = catchAsync(async (req, res) => {
  const busBrand = await busBrandService.updateBusBrandById(req.params.busBrandId, req.body);
  res.send(busBrand);
});

const deleteBusBrand = catchAsync(async (req, res) => {
  await busBrandService.deleteBusBrandById(req.params.busBrandId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createBusBrand,
  getBusBrands,
  getBusBrand,
  updateBusBrand,
  deleteBusBrand,
};
