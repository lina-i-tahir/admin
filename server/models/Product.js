import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    ProductID: String,
    SupplierID: String,
    Description: String,
    UnitPrice: Number,
    UnitOfMeasurement: String,
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", ProductSchema);
export default Product;
