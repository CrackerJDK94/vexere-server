const mongoose = require('mongoose');
const { toJSON } = require('./plugins');
const { tokenTypes } = require('../config/tokens');

const officeSchema = mongoose.Schema(
  {
    busBrand: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'BusBrand',
      required: true,
    },
    name: {
        type: String,
        required: true,
        trim: true,
    },
    address: {
        type: String,
        required: true,
    },
    provinceOrCity: {
        type: String,
        required: true,
    },
    district: {
        type: String,
        required: true,
    },
    provinceOrCity: {
        type: String,
        required: true,
    },
    images: {
        type: Array,
        default: []
    },
    phone: {
      type: Number,
      required: true,
    },
    location: {
        type: Array,
        required: true,
        default: []
      },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
officeSchema.plugin(toJSON);

/**
 * @typedef Office
 */
const Office = mongoose.model('Office', officeSchema);

module.exports = Office;
