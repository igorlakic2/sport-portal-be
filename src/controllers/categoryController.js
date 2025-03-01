const Category = require("../models/categoryModel");

exports.getCategories = async (req, res, next) => {
  const currentPage = req.query.page || 1;
  const size = req.query.size || 10;

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

exports.addCategory = async (req, res, next) => {
  try {
    const name = req.body.name;

    const category = new Category({
      name,
    });

    await category.save();

    res.status(201).json({
      message: "Category created successfully!",
      category,
    });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
