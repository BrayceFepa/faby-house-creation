import ProductModel from "../Models/Product.js";

export const addProduct = async (req, res) => {
  const {
    title,
    desc,
    image,
    category,
    initialPrice,
    discountedPrice,
    quantity,
  } = req.body;

  if (
    !title ||
    !desc ||
    !image ||
    !category ||
    !initialPrice ||
    !discountedPrice ||
    !quantity
  ) {
    res.status(400).send({ message: "Veuillez remplir tous les champs" });
  }
  try {
    const newProduct = new ProductModel(req.body);
    await newProduct.save();
    res.status(201).send({ message: "Product Added Successfully!" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const getShowingProducts = async (req, res) => {
  const { title, category, price, page, limit } = req.query;

  const queryObject = {};

  let sortPrice;

  if (title) {
    queryObject.$or = [{ title: { $regex: `${title}`, $options: "i" } }];
  }

  if (price === "low") {
    sortPrice = 1;
  } else {
    sortPrice = -1;
  }

  if (category) {
    queryObject.category = { $regex: category, $options: "i" };
  }

  queryObject.status = { $regex: "show", $options: "i" };

  const pages = Number(page);
  const limits = Number(limit);
  const skip = (pages - 1) * limit;

  try {
    const totalDoc = await ProductModel.countDocuments(queryObject);
    const products = await ProductModel.find(queryObject)
      .sort(price ? { price: sortPrice } : { _id: -1 })
      .skip(skip)
      .limit(limits);

    res.status(200).send({
      products,
      totalDoc,
      limits,
      pages,
    });
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
};

export const getAllProducts = async (req, res) => {
  const { title, category, price, page, limit } = req.query;

  const queryObject = {};

  let sortPrice;

  if (title) {
    queryObject.$or = [{ title: { $regex: `${title}`, $options: "i" } }];
  }

  if (price === "low") {
    sortPrice = 1;
  } else {
    sortPrice = -1;
  }

  if (category) {
    queryObject.category = { $regex: category, $options: "i" };
  }

  const pages = Number(page);
  const limits = Number(limit);
  const skip = (pages - 1) * limit;

  try {
    const totalDoc = await ProductModel.countDocuments(queryObject);
    const products = await ProductModel.find(queryObject)
      .sort(price ? { price: sortPrice } : { _id: -1 })
      .skip(skip)
      .limit(limits);

    res.status(200).send({
      products,
      totalDoc,
      limits,
      pages,
    });
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
};

export const getTrendsProducts = async (req, res) => {
  const { title, category, price, page, limit } = req.query;

  const queryObject = {};
  let sortPrice;

  if (title) {
    queryObject.$or = [{ title: { $regex: `${title}`, $options: "i" } }];
  }

  if (price === "low") {
    sortPrice = 1;
  } else {
    sortPrice = -1;
  }

  if (category) {
    queryObject.category = { $regex: category, $options: "i" };
  }

  queryObject.discountedPrice = {
    $lt: { $multiply: ["$price", 0.7] }, // Discounted price is less than 70% of the original price
  };

  const pages = Number(page);
  const limits = Number(limit);
  const skip = (pages - 1) * limit;

  try {
    const totalDoc = await ProductModel.countDocuments(queryObject);
    const products = await ProductModel.find(queryObject)
      .sort(price ? { price: sortPrice } : { _id: -1 })
      .skip(skip)
      .limit(limits);

    res.status(200).send({
      products,
      totalDoc,
      limits,
      pages,
    });
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
};

export const getProductById = async (req, res) => {
  try {
    const product = await ProductModel.findById(req.params.id);
    if (product) {
      res.status(200).send(product);
    } else {
      res.status(404).send({ message: "Product not found" });
    }
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const product = await ProductModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res
      .status(200)
      .send({ data: product, message: "Product Updated successfully" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const updateStatus = async (req, res) => {
  const newStatus = req.body.status;

  try {
    const product = await ProductModel.findById(req.params.id);
    if (product) {
      product.status = newStatus;
      await product.save();
      res.status(200).send({
        message: `Product set to ${newStatus} status successfully! `,
      });
    } else {
      res.status(404).send({ message: "product doesn't exist" });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    await ProductModel.findByIdAndDelete(req.params.id);
    res.status(200).send({ message: "Product deleted successfully !" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
