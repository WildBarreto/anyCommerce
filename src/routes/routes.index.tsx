import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import { Detail } from "../pages/detail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/produto",
    element: <Detail/>,
  },
]);

export default router;
