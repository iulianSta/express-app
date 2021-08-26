const userData = require("../model/userModel");
const express = require("express");

// Middleware
// Get one user by username
const getUser = async (req, res, next) => {
  let user;
  try {
    user = await UserData.findOne({ userName: req.params.userName });
    console.log(user);
    if (user == null) {
      // NOt found
      return res.status(404).json({ message: "Username not found" });
    }
  } catch (err) {
    // 500 Internal server error
    res.status(500).json({ message: err.message });
  }
  res.user = user;
  next();
};

module.exports = {
  getUser,
};
