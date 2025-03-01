const express = require("express");
const router = express.Router();
const {
  getCategories,
  addCategory,
  deleteCategory,
  updateCategory,
} = require("../controllers/categoryController");

router.get("/", getCategories);

router.post("/", addCategory);

router.delete("/:categoryId", deleteCategory);

router.put("/:categoryId", updateCategory);

module.exports = router;
