import express from "express";
import { getUploads } from "../controllers/uploads.js";

const router = express.Router();

router.get("/uploads", getupload);

export default router;
