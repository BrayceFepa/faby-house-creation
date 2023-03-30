const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    desc: { type: String, required: true, unique: true },
    img: { type: String, required: true },
    category: { type: String, required: true },
    color: { type: String, required: true },
    size: { type: String, required: true },
    initialPrice: { type: Number, required: true },
    discountedPrice: { type: Number, required: true },
    isNew: { type: Boolean, default: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
