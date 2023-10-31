import csv from "csvtojson";
import userCsv from "../models/UserCsv.js";

export const getUserCsv = async (req, res) => {
  try {
    const userDataTwo = [];
    csv()
      .fromFile(req.file.path)
      .then(async (res) => {
        for (var x = 0; x < res.length; x++) {
          userDataTwo.push({
            //follow header
            name: res[x].Name,
            email: res[x].Email,
            mobile: res[x].Mobile,
          });
        }

        await userCsv.insertMany(userDataTwo);
      });
    res.status(200).json({ message: "CSV imported" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
