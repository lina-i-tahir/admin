import express from "express";
import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";
import { getSuppCsv } from "../controllers/uploadController.js";

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

router.post("/importSuppliers", upload.single("file"), getSuppCsv);

export default router;
