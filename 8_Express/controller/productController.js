let productList = [];
class Product {
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }
}

//API - controller
// a. Get All products
exports.getAllProduct = (req, res) => {
  //
  res.render("allProduct", { data: productList });
};
// b. Get Particular Products
exports.getProduct = (req, res) => {
  res.render("product");
};

// c. Delete a single Product
exports.deleteProduct = (req, res) => {
  const id = parseInt(req.params.id);
  console.log(id);
  if (id < 0 || id > productList.length) {
    res.status(404).json({
      status: "error",
      message: "Product Not Found",
    });
  }
  productList.splice(id - 1, 1);
  res.status(200).json({
    status: "success",
  });
};

// d. Edit a particular product
exports.patchProduct = (req, res) => {
  const data = req.body;
  const id = parseInt(req.params.id);
  console.log(id);
  console.log("data from the body", data, id);
  productList[id - 1] = {
    id,
    ...data,
  };
  if (id < 1 || id > productList.length) {
    return res.status(404).json({
      status: "error",
      message: "Product Not Found",
    });
  }
  res.status(200).json({
    status: "success",
    data: productList[id - 1],
    message: "Product Details Changed Successfully",
  });
};
// e. Add a particular product - api-post
exports.addProduct = (req, res) => {
  // console.log(req.body);
  const newProduct = new Product(
    productList.length + 1,
    req.body.name,
    req.body.price
  );
  productList.push(newProduct);
  res.status(201).json({
    status: "success",
    data: newProduct,
    message: "New Product added",
  });
};

// f.
