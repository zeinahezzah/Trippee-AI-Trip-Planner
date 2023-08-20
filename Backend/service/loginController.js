const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const { getUser, addNewUser } = require("../DA/UserDA");
const secretKey =
  "adtgacfAvcsjanbv!@$*ddcrd*%bghvfgdffhdrdfgfgADDEFCSDDhbvhbvf23u5knjlpo@gtfd";

// const login = async (email, password) => {
const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if the user exists
    const user = await getUser(email);
    if (!user) {
      // console.error("User Not Found")
      return res.status(404).json({ error: "User not found" });
    } else {
      // Compare passwords
      const passwordMatch = await bcrypt.compare(password, user.password);

      if (!passwordMatch) {
        // console.error("Invalid Credentials");
        return res.status(401).json({ error: "Invalid credentials" });
      } else {
        // Generate a JWT token
        const token = jwt.sign({ userId: user._id }, secretKey, {
          expiresIn: "12h",
        });
        res.cookie("jwt", token);
        console.log(req.cookies);

        res.send(token);
        console.log("Login Successful");
        // return token;
        //return JSON.stringify(user, null, 2);
      }
    }
  } catch (error) {
    // console.error('Error during login:', error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = login;

// login('test123@gmail.com', 'test123');
