const Flight = require("../models/Flight");
const Plan = require("../models/Plan");
const mongoose = require("mongoose");

const addNewFlight = async (
    airportFrom1,
    airportTo1,
    depTime1,
    arrTime1,
    duration1,
    airline1,
    connecting1,

    airportFrom2,
    airportTo2,
    depTime2,
    arrTime2,
    duration2,
    airline2,
    connecting2,

    price,
    currency,
    url,
    imageURL,
) => {
  try {
    const flight = await Flight.create({
        airportFrom1: airportFrom1,
        airportTo1: airportTo1,
        depTime1: depTime1,
        arrTime1: arrTime1,
        duration1: duration1,
        airline1: airline1,
        connecting1: connecting1,

        airportFrom2: airportFrom2,
        airportTo2: airportTo2,
        depTime2: depTime2,
        arrTime2: arrTime2,
        duration2: duration2,
        airline2: airline2,
        connecting2: connecting2,

        price: price,
        currency: currency,
        url: url,
        imageURL: imageURL,
      });
      return flight;
  } catch (error) {
    console.log("This is in addNewFlight: "+error.message)
  }
};

const getFlight = async (planID) => {
  try {
    const plan = await Plan.findOne({ PlanId: planID }).populate("flight");
    return plan.flight;
  } catch (error) {
    return null;
  }
};

module.exports = {
  getFlight,
  addNewFlight,
};
