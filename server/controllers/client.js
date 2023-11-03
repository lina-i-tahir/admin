import Product from "../models/Product.js";
import ProductStat from "../models/ProductStat.js";
import Supplier from "../models/Suppliers.js";

// original
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const saveProduct = async (req, res) => {
  try {
    const products = req.body;
    Product.create({ product });
    console.log("product saved");
    res.status(200).json(products);
  } catch (error) {
    console.log(err);
    res.status(404).json({ message: error.message });
  }
};
export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    Product.findByIdAndUpdate(id, { product });
    console.log("product updated");
    res.status(200).json(products);
  } catch (error) {
    console.log(err);
    res.status(404).json({ message: error.message });
  }
};
export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    Product.findByIdAndDelete(id);
    console.log("product deleted");
    res.status(200).json(products);
  } catch (error) {
    console.log(err);
    res.status(404).json({ message: error.message });
  }
};

export const getProductsStat = async (req, res) => {
  try {
    const productStats = await ProductStat.find();
    res.status(200).json(productStats);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getSuppliers = async (req, res) => {
  try {
    // sort should look like: { "field": "userId", "sort": "description"}
    const { page = 1, pageSize = 20, sort = null, search = "" } = req.query;

    // grabbing the sort, the page number size, search term
    // formatted sort should look like {  userId: -1 }
    const generateSort = () => {
      const sortParsed = JSON.parse(sort);
      const sortFormatted = {
        [sortParsed.field]: (sortParsed.sort = "asc" ? 1 : -1),
      };
      return sortFormatted;
    };
    const sortFormatted = Boolean(sort) ? generateSort() : {};

    // send info in query, need to check how to recall transaction ID
    const suppliers = await Supplier.find({})
      .sort(sortFormatted)
      .skip(page * pageSize)
      .limit(pageSize);

    res.status(200).json({
      // then send info back to FE
      suppliers,
      // total,
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
