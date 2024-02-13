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
  //
};
// d. Edit a particular product
exports.patchProduct = (req, res) => {
  //
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
    Message: "New Product added",
  });
};
