const express = require("express");
const handleStripe = require("../controler/handlePayment");
const createClientSecret = require("../controler/StripeClientSecret");

const route = express.Router();

route.post("/pay", handleStripe);

route.post("/client", createClientSecret);

module.exports = route;
