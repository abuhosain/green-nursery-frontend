import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { routesGenerator } from "../utils/routesGenerator";
import { userPaths } from "./user.route";
import Dashboard from "../pages/dashboard/Dashboard";
import ProductListTable from "../pages/dashboard/productDashboard/ProductListTable";
import CategoryListTable from "../pages/dashboard/categoryDashboard/CategoryListTable";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: routesGenerator(userPaths)
  },
  {
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
]);

export default router;
