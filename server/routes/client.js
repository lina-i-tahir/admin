import express from "express";
import {
  getProducts,
  getProductsStat,
  getSuppliers,
  saveProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/client.js";

const router = express.Router();

router.get("/products", getProducts);
router.get("/products/:productID/stats", getProductsStat);

// post Product
router.post("/save", saveProduct);

// update Product
router.put("/update/:id", updateProduct);
router.delete("/delete/:id", deleteProduct);
// router.put("/products/:productID/stats", updateProduct);

router.get("/suppliers", getSuppliers);
export default router;
//
