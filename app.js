// Start database connection trough express server
const express = require("express");
const app = express();
const morgan = require("morgan");
//  Dev Mode info
app.use(morgan("dev"));
// to process the json data
app.use(express.json());

// monogDB
const mongoose = require("mongoose");
const DB_URL = process.env.DB_URL;
mongoose
  .connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(console.log("Database is connected!"))
  .catch((error) => {
    console.log(`Ups... there was a problem: ${error.message}`);
  });
// http:localhost:5000/user
const user = require("./router/user");
app.use("/user", user);

app.get("/", (req, res) => {
  res.status(200).send("Welcome to my App!");
});

module.exports = app;
