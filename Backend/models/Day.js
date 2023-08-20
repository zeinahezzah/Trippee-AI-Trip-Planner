const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const daySchema = new Schema(
  {
    dayNumber: {
      type: Number,
      required: false,
    },
    activities: {
      type: mongoose.Schema.Types.Array,
      ref: "Activity",
      required: false,
    },
  },

  { timestamps: true }
);

const day = mongoose.model("Day", daySchema);
module.exports = day;
