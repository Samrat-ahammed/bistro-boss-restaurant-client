import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Shared/Footer";
import Navbar from "../Pages/Shared/Navbar";

const Main = () => {
  const location = useLocation();
  console.log(location);

  const noHeader = location.pathname.includes("login");

  return (
    <div>
      {noHeader || <Navbar></Navbar>}
      <Outlet></Outlet>
      {noHeader || <Footer></Footer>}
    </div>
  );
};

export default Main;
