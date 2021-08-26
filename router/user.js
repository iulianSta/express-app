const express = require("express");
const router = express.Router();
const userData = require("../model/userModel");
const {
  getUser,
  getAllUsers,
  //   getAdd,
  addNewUser,
  getOneUser,
  updateOneUser,
  deleteOneUser,
  updateAllUserData,
  //   updateManyUsers,
} = require("../controllers/userController");

// Root Route
// GET all users , POST new user
router.route("/").get(getAllUsers).post(addNewUser);

// Route with name value
router
  .route("/:name")
  .get(getUser, getOneUser)
  .patch(getUser, updateOneUser)
  .put(getUser, updateAllUserData)
  .delete(getUser, deleteOneUser);
