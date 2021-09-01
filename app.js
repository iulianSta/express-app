// Start database connection trough express server
const express = require("express");
const app = express();
const morgan = require("morgan");
//  Dev Mode info
app.use(morgan("dev"));
// to process the json data
app.use(express.json());

// http:localhost:5000/user
const userRouter = require("./router/user");
app.use("/display", displayRouter);

// monogDB conection
const mongoose = require("mongoose");
const DB_URL = process.env.DB_URL;
mongoose
  .connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(console.log("Database is connected!"))
  .catch((err) => {
    console.log(`Ups... there was a problem: ${err.message}`);
  });

app.get("/", (req, res) => {
  try {
    res.status(200).send("Welcome to my App!");
  } catch (err) {
    res.status(err.status).json(err.message);
  }
});

module.exports = app;
