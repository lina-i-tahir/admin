import express from "express";
import {
  getProducts,
  getProductsStat,
  getSuppliers,
  updateProduct,
} from "../controllers/client.js";

const router = express.Router();

router.get("/products", getProducts);
router.get("/products/:productID/stats", getProductsStat);

// update Product
router.put("/products/:id", updateProduct);
router.put("/products/:productID/stats", updateProduct);

router.get("/suppliers", getSuppliers);
export default router;
