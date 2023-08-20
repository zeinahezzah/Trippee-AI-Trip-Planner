const express = require("express");
const {
  getSpecificCity,
  getAllCitiesDetails,
} = require("../service/explorationController");

const router = express.Router();
router.post("/getCityDetails", getSpecificCity);
router.get("/getAllCitiesDetails", getAllCitiesDetails);

module.exports = router;
