import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Product Name is required"],
    maxlength: [30, "Max character length 30"],
  },
  price: {
    type: Number,
    required: [true, "Price is required"],
  },
});

const Product = mongoose.model("Product", productSchema);

export default Product;
