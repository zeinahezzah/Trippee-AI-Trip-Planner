const express = require("express");
const router = express.Router();
const {
  receivePreferences,
  getHotels,
  getImageSearch,
  getImageSearchArray,
  getFlightAndBookingInfo,
} = require("../service/personalizationController.js");

router.post("/receivePreferences", receivePreferences);
router.post("/personalizedPlan/getHotels", getHotels);
router.post("/personalizedPlan/getFlights", getFlightAndBookingInfo);
router.post("/personalizedPlan/getLandmarkImage", getImageSearch);
router.post("/personalizedPlan/getLandmarkImageArray", getImageSearchArray);

module.exports = router;
