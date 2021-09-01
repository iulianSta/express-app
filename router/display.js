const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const userMdd = require("../middleware/");

const { getUser, userNameCapitalized, toolStackArrSort, strToNum } =
  userMiddleware;

// GET one user
// URL  http://localhost:5000/display/:name

router
  .route("/:name")
  .get(
    getUser,
    userNameCapitalized,
    toolStackArrSort,
    strToNum,
    userController.displayUser
  );

module.exports = router;
