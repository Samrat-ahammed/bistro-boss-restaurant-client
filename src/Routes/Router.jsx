import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home.jsx/Home";
import Menu from "../Pages/menu/Menu";
import OrderFood from "../Pages/OrderFood";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import PrivetRoute from "./PrivetRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "menu", element: <Menu></Menu> },
      {
        path: "order/:category",
        element: (
          <PrivetRoute>
            <OrderFood></OrderFood>
          </PrivetRoute>
        ),
      },
      { path: "login", element: <Login></Login> },
      { path: "signup", element: <Signup></Signup> },
    ],
  },
]);
