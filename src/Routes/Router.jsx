import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home.jsx/Home";
import Menu from "../Pages/menu/Menu";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/menu", element: <Menu></Menu> },
    ],
  },
]);
