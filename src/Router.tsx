import { createBrowserRouter } from "react-router-dom";
import Home from "./page/Home";
import DetailProduct from "./page/DetailProduct";
import Login from "./page/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/product",
    element: <DetailProduct />
  },
  {
    path: "about",
    element: <div>About</div>,
  }
]);