import Product from "../model/productSchema.js";

export const addProduct = async (req, res) => {
  try {
    const data = req.body;

    // console.log("request from the body", data);

    const newProduct = await Product.create(data);

    return res.status(201).json({
      status: "success",
      data: newProduct,
      msg: "Product addded successfully",
    });
  } catch (err) {
    return res.status(500).json({
      status: "error",
      msg: "Product not added",
    });
  }
};

export const getProduct = async (req, res) => {
  try {
    const data = await Product.find();
    // console.log("Get data from db", data);
    return res.status(200).json({
      status: "success",
      length: data.length,
      msg: "Product Found Successfully",
      data: data,
    });
  } catch (err) {
    return res.status(500).json({
      status: "error",
      msg: "Internal Server Error",
    });
  }
};

export const getSingleProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Product.findById(id);
    if (!data) {
      return res.status(404).json({
        status: "error",
        msg: "Data not found",
      });
    }

    return res.status(200).json({
      status: "success",
      msg: "Product Found Successfully",
      data: data,
    });
  } catch (err) {
    return res.status(500).json({
      status: "error",
      msg: "Internal Server Error",
    });
  }
};

export const editProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const newData = req.body;
    // console.log(id, newData);
    const data = await Product.findByIdAndUpdate(id, newData, {
      runValidators: true,
      new: true,
    });
    return res.status(200).json({
      status: "success",
      msg: "Product details updated successfully",
      data: newData,
    });
  } catch (err) {
    return res.status(500).json({
      status: "Something went wrong",
      msg: "Internal Server Error",
    });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Product.findByIdAndDelete(id);
    if (!data) {
      return res.status(404).json({
        status: "error",
        msg: "Data not found",
      });
    }
    return res.status(204).json({
      status: "success",
      msg: "Product deleted Successfully",
    });
  } catch (err) {
    return res.status(500).json({
      status: "error",
      msg: "Internal Server Error",
    });
  }
};
