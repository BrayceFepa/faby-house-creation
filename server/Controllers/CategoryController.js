import CategoryModel from "../Models/Category.js";

export const addCategory = async (req, res) => {
  const { title, currentUserAdminStatus } = req.body;
  if (currentUserAdminStatus) {
    if (title) {
      try {
        const newCategory = new CategoryModel(req.body);
        await newCategory.save();
        res.status(201).send({ message: "Category Added successfully" });
      } catch (error) {
        res.status(500).send({ message: error.message });
      }
    } else {
      res
        .status(500)
        .send({ message: "veuillez renseigner le titre de la category" });
    }
  } else {
    res.status(401).send({ message: "Forbidden" });
  }
};

export const getShowingCategory = async (req, res) => {
  try {
    const categories = await CategoryModel.find({ status: "Show" }).sort({
      _id: -1,
    });
    res.status(200).send(categories);
  } catch (error) {
    res.status(500).message({ message: error.message });
  }
};

export const getAllCategories = async (req, res) => {
  try {
    const { page, limit } = req.query;
    const pages = Number(page);
    const limits = Number(limit);
    const skip = (pages - 1) * limit;
    const categories = await CategoryModel.find({})
      .sort({ _id: -1 })
      .skip(skip)
      .limit(limits);
    res.status(200).send(categories, limits, pages);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const getCategoryById = async (req, res) => {
  try {
    const category = await CategoryModel.findById(req.params.id);
    if (category) {
      res.send(category);
    } else {
      res.status(404).send({ message: "Not found" });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const updateCategory = async (req, res) => {
  // if (currentUserAdminStatus) {
  try {
    const category = await CategoryModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res
      .status(201)
      .send({ data: category, message: "Category updated successfully" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
  // } else {
  //   res.status(401).send({ message: "Forbidden" });
  // }
};

export const updateStatus = async (req, res) => {
  const { newStatus, currentUserAdminStatus } = req.body;
  if (currentUserAdminStatus) {
    try {
      const category = await CategoryModel.findById(req.params.id);
      if (category) {
        category.status = newStatus;
        await category.save();
        res
          .status(200)
          .send({ message: `category set to ${newStatus} successfully !` });
      }
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  } else {
    res.status(401).send({ message: "Forbidden" });
  }
};

export const deleteCategory = async (req, res) => {
  try {
    await CategoryModel.findByIdAndDelete(req.params.id);
    res.status(200).send({ message: "Category deleted successfully !" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
