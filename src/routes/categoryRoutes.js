const express = require("express");
const router = express.Router();
const {
  getCategories,
  addCategory,
  deleteCategory,
  updateCategory,
} = require("../controllers/categoryController");
const isAuth = require("../../middleware/is-auth");

router.get("/", isAuth, getCategories);

router.post("/", isAuth, addCategory);

router.delete("/:categoryId", isAuth, deleteCategory);

router.put("/:categoryId", isAuth, updateCategory);

module.exports = router;
