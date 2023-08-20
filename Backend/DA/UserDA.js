const User = require("../models/User");
const mongoose = require("mongoose");

const addNewUser = async (
  email,
  password,
  firstName,
  lastName,
  gender,
  age,
  country, 
  currency
) => {
  try {
    const user = await User.create({
        email: email,
        password: password,
        first_name: firstName,
        last_name: lastName,
        gender: gender,
        age: age,
        country: country,
        currency: currency
      });
      return user;
  } catch (error) {
    console.log("This is in addNewUser: "+error.message)
  }
};

const getUser = async (email) => {
  try {
    const user = await User.findOne({ email: email });
    return user;
  } catch (error) {
    return null;
  }
};

module.exports = {
 getUser,
 addNewUser,
};

