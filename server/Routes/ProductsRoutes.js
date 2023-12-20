import express from "express";
import {
  addProduct,
  deleteProduct,
  getAllProducts,
  getProductById,
  getShowingProducts,
  getTrendsProducts,
  updateProduct,
  updateStatus,
} from "../Controllers/ProductController.js";

import { checkAdminAuthorization } from "../Config/auth.js";

const router = express.Router();

// add a product
router.post("/add", checkAdminAuthorization, addProduct);

// get all products
router.get("/all", checkAdminAuthorization, getAllProducts);

// get all products
router.get("/discounts", checkAdminAuthorization, getTrendsProducts);

// get showing products
router.get("/", getShowingProducts);

// get product by id
router.post("/:id", getProductById);

// update a product
router.put("/:id", checkAdminAuthorization, updateProduct);

// update product status
router.put("/status/:id", checkAdminAuthorization, updateStatus);

// delete a product
router.delete("/:id", checkAdminAuthorization, deleteProduct);

export default router;
