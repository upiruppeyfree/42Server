const express = require("express");
const adminrouter = express.Router();

const { setNextNumber } = require("../controllers/adminController");

adminrouter.post("/set-next", setNextNumber);

module.exports = adminrouter;
