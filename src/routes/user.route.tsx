 import Checkout from "../pages/checkout/Checkout";
import Home from "../pages/home/Home";
import Product from "../pages/product/Product";

export const userPaths = [
  {
    name: "Home",
    path: "/",
    element: <Home />,
  },
  {
    name: "Product",
    path: "/product",
    element : <Product />
  },
  {
    name: "Checkout",
    path: "/checkout",
    element : <Checkout />
  },

];
