// import UserCsv from "../models/UserCsv";

export const getUserCsv = async (req, res) => {
  try {
    res.status(200).json({ message: "CSV imported" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
