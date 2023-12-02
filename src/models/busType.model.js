const mongoose = require('mongoose');
const { toJSON } = require('./plugins');

const busTypeSchema = mongoose.Schema(
  {
    name: {
        type: String,
        required: true,
        trim: true,
    },
    images: {
        type: Array,
        required: true,
    },
    busBrand: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'BusBrand',
        required: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
busTypeSchema.plugin(toJSON);

/**
 * @typedef BusType
 */
const BusType = mongoose.model('BusType', busTypeSchema);

module.exports = BusType;
