const City = require("../models/City");
const mongoose = require("mongoose");

//Check if city is already created.
const getCity = async (name) => {
  try {
    const city = await City.findOne({ name: name }).populate("attractions");
    return city;
  } catch (error) {
    return null;
  }
};

//Create a new city.
const addNewCity = async (
  name,
  country,
  continent,
  visaRequirements,
  currency,
  safety,
  description,
  imagesURL
) => {
  try {
    const city = await City.create({
      name: name,
      country: country,
      continent: continent,
      visaRequirements: visaRequirements,
      currency: currency,
      safety: safety,
      imagesURL: imagesURL,
      description: description,
    });
    return city;
  } catch (error) {
    console.log("This is in addNewCity" + error.message);
  }
};

//Add tha attraction to the array of attractions in city model.
const addAttractionToCity = async (cityID, attractionID) => {
  try {
    const city = await City.updateOne(
      { _id: cityID },
      { $push: { attractions: new mongoose.Types.ObjectId(attractionID) } }
    );
    return city;
  } catch (error) {
    console.log("This is in addAttractionToCity" + error.message);
  }
};

//Get all cities in the DB.
const getAllCities = async () => {
  const cities = await City.find();
  return cities;
};

module.exports = {
  addNewCity,
  getCity,
  addAttractionToCity,
  getAllCities,
};
