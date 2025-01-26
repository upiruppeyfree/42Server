const express = require("express");
const Randomrouter = express.Router();
const { getRandomNumber } = require("../controllers/randomNumberController");

Randomrouter.get("/wingo1", getRandomNumber);

module.exports = Randomrouter;
