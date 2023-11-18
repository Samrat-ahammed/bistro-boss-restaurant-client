import { NavLink, Outlet } from "react-router-dom";
import {
  MdAddShoppingCart,
  MdBook,
  MdEmail,
  MdHome,
  MdHomeMax,
  MdList,
  MdMenu,
  MdReviews,
} from "react-icons/md";
import useCart from "../CustomHooks/useCart";
import { FaUser, FaUtensils } from "react-icons/fa";

const Dashboard = () => {
  // TODO: get admin value from data base
  const isAdmin = true;

  const [cart] = useCart();
  return (
    <div className="flex p-4">
      <div className="w-64 min-h-screen bg-orange-500">
        <ul className="menu p-4 space-y-4">
          {isAdmin ? (
            <>
              {" "}
              <li>
                <NavLink to={"/dashboard/userHome"}>
                  <MdHome />
                  Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/addItems"}>
                  <FaUtensils />
                  Add Items
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/manageItems"}>
                  <MdList></MdList>
                  Manage Items
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/manageBooking"}>
                  <MdBook /> Manage Booking
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/users"}>
                  <FaUser /> All Users
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to={"/dashboard/userHome"}>
                  <MdHome />
                  User Home
                </NavLink>
              </li>

              <li>
                <NavLink to={"/dashboard/cart"}>
                  <MdAddShoppingCart /> My Cart({cart.length})
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/review"}>
                  <MdReviews /> Review
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/booking"}>
                  <MdBook /> My Booking
                </NavLink>
              </li>
            </>
          )}
          <div className="divider"></div>
          <li>
            <NavLink to={"/"}>
              <MdHomeMax />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/order/:category"}>
              <MdMenu />
              Menu
            </NavLink>
            <NavLink to={"/order/:contacts"}>
              <MdEmail />
              Contacts
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
