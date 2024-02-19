import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home from "./pages/home";
import ProductPage from "./pages/productPage";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Home />}>
      <Route path="product">
        <Route path=":id" element={<ProductPage />}></Route>
      </Route>
    </Route>
  )
);
export default router;
