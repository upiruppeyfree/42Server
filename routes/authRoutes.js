const express = require("express");
const { registerUser, loginUser } = require("../controllers/auth.controller");

const Authrouter = express.Router();


Authrouter.post("/register", registerUser);
Authrouter.post("/login", loginUser);

module.exports = Authrouter;
