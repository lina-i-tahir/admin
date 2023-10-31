import mongoose from "mongoose";

var userCsvSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  mobile: {
    type: Number,
  },
});

module.exports = mongoose.model("UserCsv", userCsvSchema);
