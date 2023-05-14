import express from "express";
import {
  addProduct,
  getAllProducts,
} from "../Controllers/ProductController.js";

const router = express.Router();

router.post("/add", addProduct);

// get all products
router.get("/", getAllProducts);

export default router;
