const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const citySchema = new Schema(
  {
    name: {
      type: String,
      required: false,
    },
    country: {
      type: String,
      required: false,
    },
    continent: {
      type: String,
      required: false,
    },
    visaRequirements: {
      type: String,
      required: false,
    },
    currency: {
      type: String,
      required: false,
    },
    safety: {
      type: String,
      required: false,
    },
    attractions: {
      type: mongoose.Schema.Types.Array,
      ref: "Attraction",
      required: false,
    },
    description: {
      type: String,
    },
    imagesURL: {
      type: [String],
      required: false,
    },
  },

  { timestamps: true }
);

const city = mongoose.model("City", citySchema);
module.exports = city;
