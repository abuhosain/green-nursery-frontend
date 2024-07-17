import Checkout from "../pages/checkout/Checkout";
import CategoryListTable from "../pages/dashboard/categoryDashboard/CategoryListTable";
import Dashboard from "../pages/dashboard/Dashboard";
import ProductListTable from "../pages/dashboard/productDashboard/ProductListTable";
import Home from "../pages/home/Home";
import ProductDetails from "../pages/product/_components/ProductDetails";
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
    children: [
      {
        path: ":id", // Corrected to match dynamic segment properly
        element: <ProductDetails />
      }
    ]
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
    children: [
      {
        path: "", // Empty string for the default route
        element: <ProductListTable />
      },
      {
        path: "categories", // Relative path for categories
        element: <CategoryListTable />
      }
    ]
  }
];
