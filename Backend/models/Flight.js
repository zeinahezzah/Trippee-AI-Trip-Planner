const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const flightSchema = new Schema(
  {
      //Flight 1
      airportFrom1: {
        type: String,
        required: false,
      },
      airportTo1:{
        type: String,
        required: false,
      },
      depTime1: {
        type: String,
        required: false,
      },
      arrTime1: {
        type: String,
        required: false,
      },
      duration1: {
        type: String,
        required: false,
      },
      airline1: {
        type: String,
        required: false,
      },
      connecting1: {
        type: Boolean,
        required: false,
      },


      //Flight 2
      airportFrom2: {
        type: String,
        required: false,
      },
      airportTo2: {
        type: String,
        required: false,
      },
      depTime2: {
        type: String,
        required: false,
      },
      arrTime2: {
        type: String,
        required: false,
      },
      duration2: {
        type: String,
        required: false,
      },
      airline2: {
        type: String,
        required: false,
      },
      connecting2: {
        type: Boolean,
        required: false,
      },
     
    //general
      price: {
        type: Number,
        required: false,
      },
      currency: {
        type: String,
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

const flight = mongoose.model("Flight", flightSchema);
module.exports = flight;


//depTime (2), arrTime (2), duration (2), airports, connecting?, price, url, operator(airline), 