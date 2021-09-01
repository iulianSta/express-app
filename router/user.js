const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const userMiddleware = require("../middleware/");

// const { checkUserData, checkAge, checkFbw, getUser } = userMiddleware;

// Root Route
// GET all users , POST check user data, age and organization (fbw) and add new user

router
  .route("/")
  .get(userController.getAllUsers)
  .post(
    userMiddleware.checkUserData,
    userMiddleware.checkAge,
    userMiddleware.checkFbw,
    userController.addNewUser
  );

// URL http://localhost:5000/user/:name

router
  .route("/:name")
  .put(userMiddleware.getUser, userController.updateUserData)
  .patch(userMiddleware.getUser, userController.patchUserData);

// Export router
module.exports = router;
