import { handleProductQuantuty } from "../Config/others.js";
import OrderModel from "../Models/Order.js";

export const addOrder = async (req, res) => {
  try {
    const newOrder = new OrderModel({
      ...req.body,
      user: req.user._id,   
    });
    const order = await newOrder.save();
      res.status(201).send(order);
      handleProductQuantuty(order.cart)
  } catch (error) {
      res.status(500).send({
        message: err.message,
      });
  }
};
