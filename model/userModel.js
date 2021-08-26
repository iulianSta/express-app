const mongoose = require("mongoose");
const userDataSchema = new mongoose.Schema({
  userName: {
    type: String,
    // Trim empty spaces from the begining and the end
    trim: true,
    // Lowercase characters
    toLowerCase: true,
    // Required
    required: [true, "Please add your username"],
    // Unique username
    unique: true,
  },
  userPass: {
    type: String,
    // Trim empty spaces from the begining and the end
    trim: true,
    // Required
    required: [true, "Please add your password"],
  },
  age: {
    type: String,
    // Trim empty spaces from the begining and the end
    trim: true,
    // Transform to number
    parseInt: true,
    //required: true,
    required: [true, "Please add your age"],
  },
  fbw: {
    type: String,
    // Trim empty spaces from the begining and the end
    trim: true,
    // Transform to number
    parseInt: true,
    //required: true,
    required: [true, "Please add your fbw organisation number"],
  },
  toolStack: {
    type: Array,
  },

  email: {
    type: String,
    trim: true,
    required: [true, "Please add your E-mail"],
  },

  userAddedDate: {
    type: Date,
    required: true,
    default: Date.now,
  },
});
// create new collection
module.exports = mongoose.model("userData", userDataSchema);
