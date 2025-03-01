const Category = require("../models/categoryModel");

exports.getCategories = async (req, res, next) => {
  const currentPage = req.query.page || 1;
  const size = req.query.size;

  const totalItems = await Category.find().countDocuments();
  const categories = await Category.find()
    .skip((currentPage - 1) * size)
    .limit(size);

  res.status(200).json({
    message: "Fetched categories successfully.",
    categories: categories,
    totalItems: totalItems,
  });
};
