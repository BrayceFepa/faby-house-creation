import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";

import connectDB from "../Config/db.js";

import AuthRoute from "../Routes/AuthRoute.js";
import UserRoute from "../Routes/UserRoute.js";
import ProductsRoute from "../Routes/ProductsRoute.js";

dotenv.config();

connectDB();
const app = express();
app.set("trust proxy", 1);
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use(express.json({ limit: "4mb" }));

//usage of routes
app.use("/api/auth", AuthRoute);
app.use("/api/user", UserRoute);
app.use("/api/products", ProductsRoute);

app.use((err, req, res, next) => {
  if (res.headersSent) return next(err);
  res.status(400).json({ message: err.message });
});

app.listen(process.env.PORT_NUMBER || 5000, () => {
  console.log("Listening!");
});
