import express from "express";
import { getSales } from "../controllers/sales.js";

const router = express.Router();

// same endpoint for 4 pages
router.get("/sales", getSales);

export default router;
