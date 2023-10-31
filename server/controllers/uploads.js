import Uploads from "..models/uploadsSchema";

export const Uploads = async (req, res) => {
  try {
    res.send({ status: 200, sucess: false, msg: "runi" });
  } catch (error) {
    res.send({ status: 400, sucess: false, msg: error.message });
    // res.status(404).json({ message: error.message });
  }
};
