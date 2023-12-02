const mongoose = require('mongoose');
const { toJSON } = require('./plugins');

const policySchema = mongoose.Schema(
  {
    name: {
        type: String,
        required: true,
        trim: true,
    },
    content: {
        type: String,
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
policySchema.plugin(toJSON);

/**
 * @typedef Office
 */
const Policy = mongoose.model('Policy', policySchema);

module.exports = Policy;
