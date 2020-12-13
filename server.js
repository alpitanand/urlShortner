const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const routes = require("./routes/index");

app.use(cors());

app.use(express.json());

require("dotenv").config();

const port = process.env.PORT;
const dbUrl = process.env.DB_URL;

app.use("/api", routes);

mongoose.connect(dbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//If connected properly
mongoose.connection.on("connected", function () {
  console.log("Mongoose default connection open to " + dbUrl);
});

// If the connection throws an error
mongoose.connection.on("error", function (err) {
  console.log("Mongoose default connection error " + dbUrl);
});

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
