import express from "express";
import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";

import { getUserCsv } from "../controllers/userController.js";

const router = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../public/uploads"));
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

router.post("/importUser", upload.single("file"), getUserCsv);
//
// router.post(
//   "/importUser",
//   upload.single("file")

// (req, res) => {
// Handle file upload logic here
//   res.send("File uploaded successfully!");
// }
// );

export default router;

// const express = require("express");
// // const userCsv = express();
// const router = express.Router();

// const multer = require("multer");
// const path = require("path");
// const bodyParser = require("body-parser");

// userCsv.use(bodyParser.urlencoded({ extended: true }));
// userCsv.use(express.static(path.resolve(__dirname, "public")));

// var storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "..\\/public/uploads");
//   },
//   filename: (req, file, cb) => {
//     cb(null, file.originalname);
//   },
// });

// var upload = multer({ storage: storage });

// userCsv.post("/importUser", upload.single("file"));

// module.exports = router;
