const Attraction = require("../models/Attraction");
const mongoose = require("mongoose");

const addNewAttraction = async (
  name,
  longitude,
  latitude,
  cityID,
  description,
  imageURL
) => {
  try {
    const attraction = await Attraction.create({
      name: name,
      longitude: longitude,
      latitude: latitude,
      city: new mongoose.Types.ObjectId(cityID),
      description: description,
      imageURL: imageURL,
    });
    const attractionAndCity = await Attraction.findOne({ name: name }).populate("city");
    return attractionAndCity;
  } catch (error) {
    console.log("This is in addNewAttraction" + error.message);
  }
};

const getAttraction = async (name) => {
  try {
    const attraction = await Attraction.findOne({ name: name }).populate(
      "city"
    );
    return attraction;
  } catch (error) {
    return null;
  }
};

module.exports = {
  getAttraction,
  addNewAttraction,
};
