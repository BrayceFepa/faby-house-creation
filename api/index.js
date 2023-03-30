console.log("hello");
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const authRoute = require("./routes/auth");

dotenv.config();

const app = express();
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("DB connection successfull!");
  })
  .catch((e) => console.log(e));
app.use(express.json());

app.use("/api/auth", authRoute);

app.listen(process.env.PORT_NUMBER || 5000, () => {
  console.log("Backend server is running!");
});
