const mongoose = require("mongoose");

const uploadsSchema = new mongoose.Schema(
  {
    ProductID: String,
    SupplierID: String,
    Description: String,
    UnitPrice: Number,
    UnitOfMeasurement: String,
  },
  { timestamps: true }
);

const Uploads = mongoose.model("Uploads", uploadsSchema);

module.exports = Uploads;
