const User = require('../models/User'); 
// import User from '../models/User';
const { getUser, addNewUser } = require('../DA/UserDA');
const bcrypt = require('bcrypt');
const express = require('express');
const router = express.Router();
const createUser = require('../DA/UserDA'); // Import the createUser function



// Route for user signup
//router.post('/signup', async (req, res) => {

// const signup = async(email, password, firstName, lastName, gender, age, country, currency) =>{

const signup = async(req, res) => {
  const { email, password, firstName, lastName, gender, age, country } = req.body;

  try {
    // Check if the email is already mwgood
    const existingUser = await getUser(email);
    if (existingUser) {
      return res.status(409).json({ error: 'Email already exists' });
    //   console.log('Email already exists');
    }
    else{
      // This is to hash the password before storing it
      const saltRounds = 10; // Complexity of a single bycrypt hash
      const hashedPassword = await bcrypt.hash(password, saltRounds);

      // Create a new user in the DB using the createUser function I just imported
      const newUser = addNewUser(email, hashedPassword, firstName, lastName, gender, age, country);
    //   return JSON.stringify(newUser, null, 2);
      res.send(newUser);
    }
   
  } catch (error) {
    // console.error('Error creating user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = signup;

// signup('test123@gmail.com', 'test123', 'test', '123', 'Male', 23, 'France', 'EUR')


