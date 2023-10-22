import express from "express";
import { getAdmins } from "../controllers/management.js";

const router = express.Router();

// same endpoint for 4 pages
router.get("/admins", getAdmins);

export default router;
