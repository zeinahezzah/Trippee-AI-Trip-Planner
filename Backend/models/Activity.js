const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const activitySchema = new Schema(
  {
    activityNumber: {
      type: Number,
      required: false,
    },
    attraction: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Attraction",
      required: false,
    },
    time: {
      type: String,
    },
  },

  { timestamps: true }
);

const activity = mongoose.model("Activity", activitySchema);
module.exports = activity;
