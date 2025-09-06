import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import Home from "../pages/Home";
import Login from "../Auth/Login";
import Register from "../Auth/Register";
import AddProduct from "../dashboard/Admin/AddProduct";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "auth/login",
        Component: Login,
      },
      {
        path: "auth/register",
        Component: Register,
      },
      {
        path: "add-product",
        element: <AddProduct></AddProduct>,
      },
    ],
  },
]);
