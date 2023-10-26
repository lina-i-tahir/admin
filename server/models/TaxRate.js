import mongoose from "mongoose";

const TaxRateSchema = new mongoose.Schema(
  {
    TaxRate: Number,
  },
  { timestamps: true }
);

const TaxRate = mongoose.model("TaxRate", TaxRateSchema);
export default TaxRate;
