import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home.jsx/Home";
import Menu from "../Pages/menu/Menu";
import OrderFood from "../Pages/OrderFood";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import Dashboard from "../LayOut/Dashboard";
import Cart from "../Pages/Dashboard/Cart";
import AllUsers from "../LayOut/DeshBoard/AllUsers";
import AddItems from "../Pages/Dashboard/AddItems";
import AdminRoute from "./AdminRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "menu", element: <Menu></Menu> },
      {
        path: "order/:category",
        element: <OrderFood></OrderFood>,
      },
      { path: "login", element: <Login></Login> },
      { path: "signup", element: <Signup></Signup> },
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      { path: "cart", element: <Cart></Cart> },
      {
        path: "users",
        element: (
          <AdminRoute>
            <AllUsers></AllUsers>
          </AdminRoute>
        ),
      },
      {
        path: "addItems",
        element: (
          <AdminRoute>
            <AddItems></AddItems>
          </AdminRoute>
        ),
      },
    ],
  },
]);
