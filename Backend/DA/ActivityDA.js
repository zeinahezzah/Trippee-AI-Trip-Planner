const Activity = require("../models/Activity");
const mongoose = require("mongoose");


const addNewActivity = async (
    activityNumber,
    attractionID,
    time,
) => {
  try {
    const activity = await Activity.create({
       activityNumber: activityNumber,
       attraction: new mongoose.Types.ObjectId(attractionID),
       time: time,
      });
      const activityAttr = await Activity.findOne({ where: {activityNumber: activityNumber}}).populate("attraction");
      return activityAttr;
  } catch (error) {
    console.log("This is in addNewActivity: "+error.message)
  }
};

const getActivity = async (activityNumber) => {
  try {
    const activity = await Activity.findOne({ activityNumber: activityNumber }).populate("attraction");
    return activity;
  } catch (error) {
    return null;
  }
};

module.exports = {
  getActivity,
  addNewActivity,
};
