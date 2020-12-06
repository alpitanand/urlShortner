const express = require("express");
const app = express();
const env = require("dotenv").config();
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
