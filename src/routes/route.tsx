import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import MainProduct from "../pages/product/Product";
import ProductDetails from "../pages/product/_components/ProductDetails";
import Checkout from "../pages/checkout/Checkout";
import Dashboard from "../pages/dashboard/Dashboard";
import ProductListTable from "../pages/dashboard/productDashboard/ProductListTable";
import CategoryListTable from "../pages/dashboard/categoryDashboard/CategoryListTable";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Home /> },
      { path: "products", element: <MainProduct /> },
      { path: "products/:id", element: <ProductDetails /> },
      { path: "checkout", element: <Checkout /> },
      {
        path: "dashboard",
        element: <Dashboard />,
        children: [
          { path: "", element: <ProductListTable /> },
          { path: "categories", element: <CategoryListTable /> },
        ],
      },
    ],
  },
]);

export default router;
