import Checkout from "../pages/checkout/Checkout";
import Dashboard from "../pages/dashboard/Dashboard";
import Home from "../pages/home/Home";
import MainProduct from "../pages/product/Product";

export const userPaths = [
  {
    name: "Home",
    path: "/",
    element: <Home />,
  },
  {
    name: "Products",
    path: "/products",
    element: <MainProduct />,
  },
  {
    name: "Checkout",
    path: "/checkout",
    element: <Checkout />,
  },
  {
    name: "Dashboard",
    path: "/dashboard",
    element: <Dashboard />,
  },
   
];
