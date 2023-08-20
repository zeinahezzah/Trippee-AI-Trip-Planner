const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const hotelSchema = new Schema(
  {
    name: {
        type: String,
        required: false,
      },
      city: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "City",
        required: false,
      },
      country: {
        type: String,
        required: false,
      },
      distance: {
        type: String,
        required: false,
      },
      description: {
        type: String,
        required: false,
      },
      rating: {
        type: Number,
        required: false,
      },
      review_score: {
        type: Number,
        required: false,
      },
      no_reviews: {
        type: Number,
        required: false,
      },
      review_word: {
        type: String,
        required: false,
      },
      urgency_msg: {
        type: String,
        required: false,
      },
      price: {
        type: Number,
        required: false,
      },
      currency: {
        type: String,
        required: false,
      },
      nights: {
        type: Number,
        required: false,
      },
      no_people: {
        type: Number,
        required: false,
      },
      url: {
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

const hotel = mongoose.model("Hotel", hotelSchema);
module.exports = hotel;
