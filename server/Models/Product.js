import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    desc: { type: String, required: true },
    image: { type: String, required: true },
    category: { type: String, required: true },
    color: { type: String, required: false },
    size: { type: String, required: false },
    initialPrice: { type: Number, required: true },
    discountedPrice: { type: Number, required: true },
    quantity: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      default: "show",
      enum: ["show", "hide"],
    },
    sku: { type: String, required: false },
  },
  { timestamps: true }
);

const ProductModel = mongoose.model("products", ProductSchema);
export default ProductModel;
