import express from "express";
import mongoose from "mongoose";
import {
  addProduct,
  getProduct,
  getSingleProduct,
  editProduct,
} from "./controller/productController.js";
//constant
const PORT = 5000;
const dbURI = "mongodb://127.0.0.1:27017/product";

const app = express();
app.use(express.json());

//route
app.get("/", (req, res) => {
  res.json({ msg: "home page" });
});

app.get("/product", getProduct);
app.post("/product", addProduct);
app.get("/product/:id", getSingleProduct);
app.patch("/product/:id", editProduct);

mongoose.connect(dbURI).then(() => {
  console.log("Database Connected Successfully");
});
// .catch((err) => console.log(err));

app.listen(PORT, () => {
  console.log("Server Running on PORT", PORT);
});
