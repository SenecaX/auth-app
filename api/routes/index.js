const express = require("express");
const router = express.Router();
const ctrlAuth = require("../controllers/authentication");
const jwt = require("express-jwt");
const auth = jwt({
  secret: process.env.JWT_SECRET,
  userProperty: "payload"
});

router.post("/register", ctrlAuth.register);
router.post("/login", ctrlAuth.login);

module.exports = router;
