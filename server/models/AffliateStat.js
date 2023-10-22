import mongoose from "mongoose";

// transactions
const AffliateStatSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Types.ObjectId, ref: "User" },
    affliateSales: {
      type: [mongoose.Types.ObjectId],
      ref: "Transaction",
    },
  },
  { timestamps: true }
);

const AffliateStat = mongoose.model("AffliateStat", AffliateStatSchema);
export default AffliateStat;
