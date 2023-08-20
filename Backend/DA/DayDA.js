const Day = require("../models/Day");
const Plan = require("../models/Plan");

const mongoose = require("mongoose");


const addNewDay = async (
    dayNumber
) => {
  try {
    const day = await Day.create({
       dayNumber: dayNumber,
      });
    return day;
  } catch (error) {
    console.log("This is in addNewDay: "+error.message)
  }
};

const getDay = async (dayNumber, planID) => {
  try {
    const plan = await Plan.findOne({where: {_id: planID}}).populate("days");
    return plan.days[dayNumber];
    // const day = await Day.findOne({ dayNumber: dayNumber });
    // return day;
  } catch (error) {
    return null;
  }
};


const addActivityToDay = async (dayID, activityID) => {
    try {
      const day = await Day.updateOne(
        { _id: dayID },
        { $push: { activities: new mongoose.Types.ObjectId(activityID) } }
      );
      return day;
    } catch (error) {
      console.log("This is in addActivityToDay: " + error.message);
    }
  };

module.exports = {
  getDay,
  addNewDay,
  addActivityToDay,
};
