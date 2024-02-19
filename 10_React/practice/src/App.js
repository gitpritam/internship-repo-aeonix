import "./App.css";
import { BrowserRouter, Routes, Route, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import ProductPage from "./pages/productPage";
import AddProduct from "./pages/addProduct";
import ProductList from "./pages/productList";
// import router from "./route";

function App() {
  return (
    <div className="App">
      {/* <RouterProvider router={router} /> */}
      <BrowserRouter>
        <Routes>
          <Route exact path="/product/add" element={<AddProduct />}></Route>
          <Route exact path="/product/list" element={<ProductList />}></Route>
          <Route exact path="/product/:id" element={<ProductPage />}></Route>
          <Route exact path="/" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
