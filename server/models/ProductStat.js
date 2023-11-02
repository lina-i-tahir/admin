import mongoose from "mongoose";

const ProductStatSchema = new mongoose.Schema(
  {
    ProductID: String,
    year: Number,
    monthlyData: [
      {
        month: String,
        totalPurchase: Number,
        totalUnits: Number,
      },
    ],
    dailyData: [
      {
        date: String,
        totalPurchase: Number,
        totalUnits: Number,
      },
    ],
  }
  // { timestamps: true }
);

const ProductStat = mongoose.model("ProductStat", ProductStatSchema);
export default ProductStat;
