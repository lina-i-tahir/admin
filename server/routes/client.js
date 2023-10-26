import express from "express";
import {
  getProducts,
  getProductsStat,
  getSuppliers,
} from "../controllers/client.js";

const router = express.Router();

router.get("/products", getProducts);
router.get("/products/:id", getProductsStat);
// router.get("/customers", getCustomers);

router.get("/suppliers", getSuppliers);
export default router;
