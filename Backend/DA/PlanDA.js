const Plan = require("../models/Plan");
const User = require("../models/User");
const City = require("../models/City");
const Flight = require("../models/Flight");
const Hotel = require("../models/Hotel");
const mongoose = require("mongoose");

//email, pass, firstname, lastname, gender, age, country, currency
const addNewPlan = async (
    userID,
    cityID,
    checkIn,
    checkOut,
    budget,
    preferences,
) => {
  try {
    const plan = await Plan.create({
        user: new mongoose.Types.ObjectId(userID),
        city: new mongoose.Types.ObjectId(cityID),
        budget: budget,
        checkIn: checkIn,
        checkOut: checkOut,
        preferences: preferences,
      });

      const user = await User.findOne({where: {_id: userID}});
      const city = await City.findOne({where: {_id: cityID}});
      const planUser = await Plan.findOne({ where: {user: user, city: city}}).populate("user", "city");
      return planUser;
  } catch (error) {
    console.log("This is in addNewPlan: "+error.message)
  }
};

const getPlan = async (userID, cityID) => {
  try {
    const user = await User.findOne({where: {_id: userID }});
    const city = await City.findOne({where: {_id: cityID}});
    const plan = await Plan.findOne({ where: {user: user, city: city}}).populate("user", "city");
    return plan;
  } catch (error) {
    return null;
  }
};


const addHotelToPlan = async (planID, hotelID) => {
    try {
        const plan = await Plan.updateOne(
            { _id: planID },
            { hotel: new mongoose.Types.ObjectId(hotelID) } 
          );
          return plan;
    } catch (error) {
        console.log("This is in addHotelToPlan: " + error.message);
    }
}

const addFlightToPlan = async (planID, flightID) => {
    try {
        const plan = await Plan.updateOne(
            { _id: planID },
            { flight: new mongoose.Types.ObjectId(flightID) } 
          );
          return plan;
    } catch (error) {
        console.log("This is in addFlightToPlan: " + error.message);
    }
}

const addDayToPlan = async (planID, dayID) => {
    try {
        const plan = await Plan.updateOne(
        { _id: planID },
        { $push: { days: new mongoose.Types.ObjectId(dayID) } }
        );
        return plan;
    } catch (error) {
        console.log("This is in addDayToPlan: " + error.message);
    }
}


module.exports = {
 getPlan,
 addNewPlan,
 addHotelToPlan,
 addFlightToPlan,
 addDayToPlan,
};

