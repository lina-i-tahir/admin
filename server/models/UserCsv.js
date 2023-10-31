import mongoose from "mongoose";

const userCsvSchema = new mongoose.Schema({
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

const userCsv = mongoose.model("userCsv", userCsvSchema);
export default userCsv;
