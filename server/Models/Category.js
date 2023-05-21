import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  icon: {
    type: String,
    require: false,
  },
  status: {
    type: String,
    enum: ["Show", "Hide"],
    default: "Show",
  },
});

const CategoryModel = mongoose.model("Category", CategorySchema);
export default CategoryModel;
