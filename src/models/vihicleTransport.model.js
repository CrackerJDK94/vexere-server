const mongoose = require("mongoose");
const { toJSON } = require("./plugins");

const vihicleTransportSchema = mongoose.Schema(
  {
    busBrand: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "BusBrand",
      require: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    images: {
      type: Array,
      required: true,
    },
    idBus: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
vihicleTransportSchema.plugin(toJSON);

/**
 * @typedef VihicleTransport
 */
const VihicleTransport = mongoose.model("VihicleTransport", vihicleTransportSchema);

module.exports = VihicleTransport;
