import csv from "csvtojson";
import userCsv from "../models/UserCsv.js";
import Supplier from "../models/Suppliers.js";
import Product from "../models/Product.js";
import ProductStat from "../models/ProductStat.js";

export const getUserCsv = async (req, res) => {
  try {
    const userData = [];
    csv()
      .fromFile(req.file.path)
      .then(async (res) => {
        for (var x = 0; x < res.length; x++) {
          userData.push({
            //follow header
            name: res[x].Name,
            email: res[x].Email,
            mobile: res[x].Mobile,
          });
        }

        await userCsv.insertMany(userData);
      });
    res.status(200).json({ message: "user CSV imported" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getSuppCsv = async (req, res) => {
  try {
    const suppilerUData = [];
    csv()
      .fromFile(req.file.path)
      .then(async (res) => {
        for (var x = 0; x < res.length; x++) {
          suppilerUData.push({
            //follow header
            SupplierID: res[x].SupplierID,
            Name: res[x].Name,
            Category: res[x].Category,
          });
        }

        await Supplier.insertMany(suppilerUData);
      });

    //////////
    res.status(200).json({ message: "supplier CSV imported" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getProdCsv = async (req, res) => {
  try {
    const productUData = [];
    csv()
      .fromFile(req.file.path)
      .then(async (res) => {
        for (var x = 0; x < res.length; x++) {
          productUData.push({
            ProductID: res[x].ProductID,
            SupplierID: res[x].SupplierID,
            SupplierCategory: res[x].Category,
            // {
            //   Category: res[x].Category,
            // },
            Brand: res[x].Brand,
            Description: res[x].Description,
            UnitPrice: res[x].UnitPrice,
            UnitOfMeasurement: res[x].UnitOfMeasurement,
          });
        }

        await Product.insertMany(productUData);
      });

    //////////
    res.status(200).json({ message: "product CSV imported" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const getProdStatsCsv = async (req, res) => {
  try {
    const productStatsUData = [];
    csv()
      .fromFile(req.file.path)
      .then(async (data) => {
        for (let x = 0; x < data.length; x++) {
          const monthlyData = data[x].monthlyData.map((item) => ({
            month: item.month,
            totalSales: item.totalSales,
            totalUnits: item.totalUnits,
          }));

          const dailyData = data[x].dailyData.map((item) => ({
            date: item.date,
            totalSales: item.totalSales,
            totalUnits: item.totalUnits,
          }));

          productStatsUData.push({
            ProductID: data[x].ProductID,
            YearlyMTDTotalSales: data[x].YearlyMTDTotalSales,
            YearlyMTDTotalUnits: data[x].YearlyMTDTotalUnits,
            year: data[x].year,
            monthlyData: monthlyData,
            dailyData: dailyData,
          });
        }

        await Product.insertMany(productStatsUData);
      });
    res.status(200).json({ message: "productStats CSV imported" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// csv()
//       .fromFile(req.file.path)
//       .then(async (csvData) => {
//         csvData.forEach((row) => {
//           // Assuming 'monthlyData' and 'dailyData' are arrays
//           const monthlyData = { month: row.month, totalSales: row.totalSales, totalUnits: row.totalUnits };
//           const dailyData = { date: row.date, totalSales: row.totalSales, totalUnits: row.totalUnits };

//           productStatsUData.push({
//             ProductID: row.ProductID,
//             YearlyMTDTotalSales: row.YearlyMTDTotalSales,
//             YearlyMTDTotalUnits: row.YearlyMTDTotalUnits,
//             year: row.year,
//             monthlyData: [monthlyData], // Push the monthly data to an array
//             dailyData: [dailyData], // Push the daily data to an array
//           });
//         });
//   await Product.insertMany(productStatsUData);
// });

//////////
//     res.status(200).json({ message: "productStats CSV imported" });
//   } catch (error) {
//     res.status(404).json({ message: error.message });
//   }
// };
