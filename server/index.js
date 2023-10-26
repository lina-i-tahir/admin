import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import clientRoutes from "./routes/client.js";
import generalRoutes from "./routes/general.js";
import managementRoutes from "./routes/management.js";
import salesRoutes from "./routes/sales.js";

// data imports

import dataProductStat from "./data/testPS.js";
// import User from "./models/User.js";
// import {
//   dataUser,
//   dataProduct,
//   dataProductStat,
//   dataTransaction,
//   dataOverallStat,
//   dataAffiliateStat,
// } from "./data/index.js";
// import Product from "./models/Product.js";
import ProductStat from "./models/ProductStat.js";
// import Transaction from "./models/Transaction.js";
// import OverallStat from "./models/OverallStat.js";
// import AffliateStat from "./models/AffliateStat.js";

// GOOGLE OAUTH
// const { OAuth2Client } = require("google-auth-library");
// app.post("'/", async function (req, res, next) {
//   // trigger G OAuth
//   res.header("Access-Control-Allow-Origin", "http://localhost:5001");
//   res.header("Refferer-Policy", "no-referrer-when-downgrade");
//   // redirect URL

//   const redirectUrl = "http://127.0.0.1:3000/oauth";
//   const oAuth2Client = new OAuth2Client(
//     process.env.CLIENT_ID,
//     process.env.CLIENT_SECRET,
//     redirectUrl
//   );

//   const authorizeUrl = oAuth2Client
// });

// CONFIGURATION
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// ROUTES
app.use("/client", clientRoutes);
// app.use("/supplier", supplierRoutes)
app.use("/general", generalRoutes);
app.use("/management", managementRoutes);
app.use("/sales", salesRoutes);

// Serve the React app's build directory
app.use(express.static("https://admin-fe-vapu.onrender.com/"));

// Catch-all route to serve the React app's main HTML file
app.get("*", (req, res) => {
  res.sendFile("https://admin-fe-vapu.onrender.com/");
});

// MONGOOSE SETUP
const PORT = process.env.PORT || 9000;
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));

    // Only add data once
    // ProductStat.insertMany(dataProductStat);
    // User.insertMany(dataUser);
    // Product.insertMany(dataProduct);
    // ProductStat.insertMany(dataProductStat);
    // Transaction.insertMany(dataTransaction);
    // OverallStat.insertMany(dataOverallStat);
    // AffliateStat.insertMany(dataAffiliateStat);
  })
  .catch((error) => console.log(`${error} did not connect`));
