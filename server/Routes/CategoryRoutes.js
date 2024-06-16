import express from "express";
import { checkAdminAuthorization } from "../Config/auth.js";
import {
  addCategory,
  deleteCategory,
  getAllCategories,
  getCategoryById,
  getShowingCategory,
  updateCategory,
  updateStatus,
} from "../Controllers/CategoryController.js";

const router = express.Router();

// add a category
router.post("/add", checkAdminAuthorization, addCategory);

// get all categories
router.get("/all", checkAdminAuthorization, getAllCategories);

// get only showing categories
router.get("/", getShowingCategory);

// get a specific category
router.post("/:id", getCategoryById);

// update a category
router.put("/:id", checkAdminAuthorization, updateCategory);

// update the status of a category
router.put("/status/:id", checkAdminAuthorization, updateStatus);

// delete a category
router.delete("/:id", checkAdminAuthorization, deleteCategory);

export default router;
