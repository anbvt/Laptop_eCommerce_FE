import { createBrowserRouter } from "react-router-dom";
import AdminHome from "./page/Admin/AdminHome";
import CartPage from "./page/CartPage";
import DetailProduct from "./page/DetailProduct";
import Home from "./page/Home";
import Login from "./page/Login";
import AdminReport from "./page/Admin/AdminReport";
import MyAccount from "./page/MyAccount";
import SearchPage from "./page/SearchPage";
// import BrandPage from "./page/Admin/brands";
import CustomerAdmin from "./page/Admin/Customer";
import OrderAdmin from "./page/Admin/Order";
import ProductAdmin from "./page/Admin/Product";
import LoginAdmin from "./page/Admin/login";
import OrderDetal from "./page/Admin/Order/OrderDetail";

const admin = [
  {
    path: "/admin",
    element: <AdminHome />
  },
  // {
  //   path: "/admin/brands",
  //   element: <BrandPage />
  // },
  {
    path: "/admin/customer",
    element: <CustomerAdmin />
  },
  {
    path: "/admin/order",
    element: <OrderAdmin />
  },
  {
    path: "/admin/product",
    element: <ProductAdmin />
  },
  {
    path: "/admin/login",
    element: <LoginAdmin />
  },
  {
    path:"/admin/order/detail",
    element:<OrderDetal/>
  }
]

const user = [
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
    path: "/search",
    element: <SearchPage />
  },
  {
    path: "about",
    element: <div>About</div>,
  },
  {
    path: "/cart",
    element: <CartPage />
  },
  {
    path: "/admin",
    element: <AdminHome />
  },
  {
    path: "/admin/report",
    element: <AdminReport />
  },
  {
    path:"/my-account",
    element:<MyAccount/>
  }
]

export const router = createBrowserRouter([
  ...user,
  ...admin
]);