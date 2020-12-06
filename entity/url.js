const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema({
  bigUrl: { type: String, required: true },
  tinyUrl: { type: String, required: true },
});

module.exports = mongoose.model("url", urlSchema);
