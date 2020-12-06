const express = require("express");
const router = express.Router();
const url = require("./url");

router.use(function timeLog(req, res, next) {
  console.log("Time: ", Date.now());
  next();
});

router.use("/url", url);

module.exports = router;
