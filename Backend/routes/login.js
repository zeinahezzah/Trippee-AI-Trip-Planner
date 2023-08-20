const express = require("express");
const router = express.Router();
const login = require("../service/loginController.js");
const getToken = require("../service/middleware.js");

router.post("/login", login);
router.get("/getToken", getToken);
module.exports = router;
