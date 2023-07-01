import ProductModel from "../Models/Product";

// decrease the product quantity after a order is created
export const handleProductQuantuty = async (cart) => {
  cart.forEach((p) => {
    try {
      const product = ProductModel.findById(p._id);
      if (product && product.quantity > p.quantity) {
        product.quantity -= p.quantity;
      } else {
        console.log("No more product available for this product");
      }
    } catch (error) {
      console.log(error.message);
    }
  });
};
