import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import {
  addProduct,
  getProduct,
  getSingleProduct,
  editProduct,
  deleteProduct,
} from "./controller/productController.js";
//constant
const PORT = 5000;
const dbURI = "mongodb://127.0.0.1:27017/product";

const app = express();
app.use(cors());
app.use(express.json());

//route
app.get("/", (req, res) => {
  res.json({ msg: "home page" });
});

app.get("/product", getProduct);
app.post("/product", addProduct);
app.get("/product/:id", getSingleProduct);
app.patch("/product/:id", editProduct);
app.delete("/product/:id", deleteProduct);

mongoose.connect(dbURI).then(() => {
  console.log("Database Connected Successfully");
});
// .catch((err) => console.log(err));

app.listen(PORT, () => {
  console.log("Server Running on PORT", PORT);
});
