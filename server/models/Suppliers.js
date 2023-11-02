import mongoose from "mongoose";

const SupplierSchema = new mongoose.Schema({
  SupplierID: String,
  Name: String,
  Category: String,
});

const Supplier = mongoose.model("Supplier", SupplierSchema);
export default Supplier;

//TO DELETE
// const TransactionSchema = new mongoose.Schema(
//   {
//     userId: String,
//     cost: String,
//     products: {
//       type: [mongoose.Types.ObjectId],
//       of: Number,
//     },
//   },
//   { timestamps: true }
// );

// const Transaction = mongoose.model("Transaction", TransactionSchema);
// export default Transaction;
