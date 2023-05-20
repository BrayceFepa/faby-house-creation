import express from "express";
import {
  addProduct,
  deleteProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  updateStatus,
} from "../Controllers/ProductController.js";

const router = express.Router();

// add a product
router.post("/add", addProduct);

// get all products
router.get("/", getAllProducts);

// get product by id
router.post("/:id", getProductById);

// update a product
router.put("/:id", updateProduct);

// update product status
router.put("/status/:id", updateStatus);

// delete a product
router.delete("/:id", deleteProduct);

export default router;
