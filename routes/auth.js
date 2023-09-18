const authController = require("../controler/auth");
const express = require("express");
const route = express.Router();

route.get("/login", authController.login);
module.exports = route;
