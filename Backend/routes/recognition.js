const express = require("express");
const router = express.Router();
const {
  getDetailsOfRecognizedLandmark, getDetailsOfRecognizedLandmarkArray,
} = require("../service/recognitionController.js");

router.post("/recognizeLandMark", getDetailsOfRecognizedLandmark);
router.post("/recognizeLandMarkArray", getDetailsOfRecognizedLandmarkArray);

module.exports = router;
