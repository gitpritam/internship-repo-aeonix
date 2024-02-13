const express = require("express");
const app = express();
const productController = require("./controller/productController");

app.set("view engine", "ejs");
app.use("/assets", express.static("assets"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//VIEWS
//home page
app.get("/", (req, res) => {
  res.render("home");
});

//add product page
app.get("/product/add", (req, res) => {
  res.render("productAdd");
});

//single product page
app.get("/product/:id", productController.getProduct);

//show all product with edit and delete option
app.get("/product", productController.getAllProduct);

//product edit page
app.get("/product/:id", (req, res) => {
  res.render("editProduct");
});
/********************************************************** */
//for post, update and delete
app.post("/product/add", productController.addProduct);
app.patch("/product/:id", productController.patchProduct);
app.delete("/product/:id", productController.deleteProduct);

const PORT = 5000;
const IP = "127.0.0.1";
app.listen(PORT, IP, () => {
  console.log(`Server Running on ${IP}:${PORT}`);
});
