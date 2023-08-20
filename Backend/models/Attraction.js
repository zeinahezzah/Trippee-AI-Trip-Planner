const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const attractionSchema = new Schema(
  {
    name: {
      type: String,
      required: false,
    },
    longitude: {
      type: String,
      required: false,
    },
    latitude: {
      type: String,
      required: false,
    },
    city: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "City",
      required: false,
    },
    description: {
      type: String,
      required: false,
    },
    imageURL: {
      type: String,
      required: false,
    },
  },

  { timestamps: true }
);

const attraction = mongoose.model("Attraction", attractionSchema);
module.exports = attraction;
