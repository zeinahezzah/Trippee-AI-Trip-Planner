const Hotel = require("../models/Hotel");
const mongoose = require("mongoose");


const addNewHotel = async (
    name, 
    cityID,
    country,
    distance,
    description,
    rating,
    review_score,
    no_reviews,
    review_word,
    urgency_msg,
    price,
    currency, 
    nights,
    no_people,
    url,
    imageURL,
) => {
  try {
    const hotel = await Hotel.create({
        name: name,
        city: new mongoose.Types.ObjectId(cityID),
        country: country,
        distance: distance,
        description: description,
        rating: rating,
        review_score: review_score,
        no_reviews: no_reviews,
        review_word: review_word,
        urgency_msg: urgency_msg,
        price: price,
        currency: currency,
        nights: nights,
        no_people: no_people,
        url: url,
        imageURL: imageURL,
      });
      const hotelCity = await Hotel.findOne({ where: {name: name}}).populate("city");
      return hotelCity;
  } catch (error) {
    console.log("This is in addNewHotel: "+error.message)
  }
};

const getHotel = async (name) => {
  try {
    const hotel = await Hotel.findOne({ name: name }).populate("city");
    return hotel;
  } catch (error) {
    return null;
  }
};

module.exports = {
  getHotel,
  addNewHotel,
};
