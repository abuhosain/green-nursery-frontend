import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { routesGenerator } from "../utils/routesGenerator";
import { userPaths } from "./user.route";

const router = createBrowserRouter([
    {
        path : "/",
        element : <App  />,
        children: routesGenerator(userPaths)
    }
])

export default router;