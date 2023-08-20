const express = require("express");
const router = express.Router();
const signup  = require("../service/signupController.js");

router.post("/signup", signup);
module.exports = router;