const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const secretKey =
  "adtgacfAvcsjanbv!@$*ddcrd*%bghvfgdffhdrdfgfgADDEFCSDDhbvhbvf23u5knjlpo@gtfd";

// const getToken = async(token) => {
const getToken = async (req, res) => {
  const token = req.cookies.jwt;
  console.log(req.cookies.jwt);
  var t;
  // check json web token exists & is verified
  if (token) {
    jwt.verify(token, secretKey, async (err, decodedToken) => {
      if (err) {
        res.send({ message: "You are not logged in." });
      } else {
        t = decodedToken;
        const user = await User.findById(t.userId);
        //   console.log(user);
        res.send(user);
      }
    });
  } else {
    res.send({ message: "You are not logged in." });
  }
};

module.exports = getToken;
