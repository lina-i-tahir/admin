import Product from "../models/Product.js";
import ProductStat from "../models/ProductStat.js";
import Transaction from "../models/Transaction.js";
import User from "../models/User.js";
// import Transaction from "../models/Transaction.js";

export const getProducts = async (req, res) => {
  try {
    const productsWithStats = await Product.aggregate([
      {
        $addFields: {
          _id: {
            $toString: "$_id",
          },
        },
      },
      {
        $lookup: {
          from: "productstats",
          localField: "_id",
          foreignField: "productId",
          as: "stat",
        },
      },
      {
        $unwind: {
          path: "$stat",
        },
      },
    ]);

    res.status(200).json(productsWithStats);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getCustomers = async (req, res) => {
  try {
    const customers = await User.find({ role: "user" }).select("-password");
    res.status(200).json(customers);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getTransactions = async (req, res) => {
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
    const transactions = await Transaction.find({
      $or: [
        // search only cost and userId
        { cost: { $regex: new RegExp(search, "i") } },
        { userId: { $regex: new RegExp(search, "i") } },
      ],
    })
      .sort(sortFormatted)
      .skip(page * pageSize)
      .limit(pageSize);

    // total count of transaction
    const total = await Transaction.countDocuments({
      name: { $regex: search, $options: "i" },
    });
    res.status(200).json({
      // then send info back to FE
      transactions,
      total,
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
