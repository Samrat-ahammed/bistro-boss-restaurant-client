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
import ManageItems from "../Pages/Dashboard/ManageItems";
import Update from "../Pages/Dashboard/Update";
import Payment from "../Pages/Dashboard/Payment/Payment";
import PaymentHistory from "../Pages/Dashboard/Payment/PaymentHistory";
import UserHome from "../Pages/Dashboard/UserHome";
import AdminHome from "../Pages/Dashboard/AdminHome";

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
      { path: "userHome", element: <UserHome></UserHome> },
      {
        path: "payment",
        element: <Payment></Payment>,
      },

      {
        path: "paymentHistory",
        element: <PaymentHistory></PaymentHistory>,
      },

      // admin route ..........
      {
        path: "adminHome",
        element: (
          <AdminRoute>
            <AdminHome></AdminHome>
          </AdminRoute>
        ),
      },
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
      {
        path: "update/:id",
        element: (
          <AdminRoute>
            <Update></Update>
          </AdminRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/menu/${params.id}`),
      },
      {
        path: "manageItems",
        element: (
          <AdminRoute>
            <ManageItems></ManageItems>
          </AdminRoute>
        ),
      },
    ],
  },
]);
