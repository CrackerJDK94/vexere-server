const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const { toJSON, paginate } = require("./plugins");
const { roles } = require("../config/roles");

const busBrandSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    account: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "User",
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error("Invalid email");
        }
      },
    },
    logo: {
      type: String,
      required: true,
      trim: true,
    },
    phone: {
      type: Number,
      required: true,
      trim: true,
    },
    isActive: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

busBrandSchema.pre("save", async function (next) {
  const busBrand = this;
  if (busBrand.isModified("password")) {
    busBrand.password = await bcrypt.hash(busBrand.password, 8);
  }
  next();
});

busBrandSchema.plugin(toJSON);

/**
 * @typedef BusBrand
 */
const BusBrand = mongoose.model("BusBrand", busBrandSchema);

module.exports = BusBrand;
