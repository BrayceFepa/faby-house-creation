import ProductModel from "../Models/Product.js";

export const addProduct = async (req, res) => {
  const {
    currentUserAdminStatus,
    title,
    desc,
    image,
    category,
    initialPrice,
    discountedPrice,
    quantity,
  } = req.body;
  if (currentUserAdminStatus) {
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
  } else {
    res
      .status(401)
      .send({ message: "Vous n'êtes pas habilité à faire cette opération" });
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
