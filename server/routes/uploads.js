const express = require("express");
const uploads = express();

const multer = require("multer");
const path = require("path");

const bodyParser = require("body-parser");

upload.use(bodyParser.urlencoded({ extended: true }));
upload.use(express.static(path.resolve(__dirname, "/upload.html")));

// var storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, ".public/uploads");
//   },
//   filename: (req, file, cb) => {
//     cb(null, file.originalname);
//   },
// });

// var upload = multer({ storage: storage });

const uploads = require("../controllers/uploads");
upload.post("/importProduct", upload.single("file"), uploads.importUser);
module.exports = uploads;

// import { getUploads } from "../controllers/uploads.js";

// const router = express.Router();

// router.post("/uploads", getupload);

// export default router;
