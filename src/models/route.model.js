const mongoose = require('mongoose');
const { toJSON } = require('./plugins');

const routeSchema = mongoose.Schema(
  {
    busBrand: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'BusBrand',
      required: true,
    },
    startingPoint: {
        type: String,
        required: true,
        trim: true,
    },
    endingPoint: {
        type: String,
        required: true,
        trim: true,
    },
    schedule: {
      type: Array,
      default: []
    }
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
routeSchema.plugin(toJSON);

/**
 * @typedef Route
 */
const Route = mongoose.model('Route', routeSchema);

module.exports = Route;
