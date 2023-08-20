const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const planSchema = new Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: false,
    },
    hotel: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Hotel",
      required: false,
    },
    flight: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Flight",
        required: false,
      },
    days: {
      type: mongoose.Schema.Types.Array,
      ref: "Day",
    },
    city: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "City",
    },
    budget: {
      type: Number,
      required: false,
    },
    checkIn:{
      type: String,
    },
    checkOut: {
      type: String,
    },
    preferences: {
      type: [String],
    }
  },

  { timestamps: true }
);

const plan = mongoose.model("Plan", planSchema);
module.exports = plan;
