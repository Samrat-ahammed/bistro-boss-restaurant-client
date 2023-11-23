import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { BsFillCartCheckFill } from "react-icons/Bs";
import useCart from "../../CustomHooks/useCart";
import useAdmin from "../../CustomHooks/useAdmin";

const Navbar = () => {
  const [isAdmin] = useAdmin();
  const { user, logout } = useContext(AuthContext);
  const [cart] = useCart();
  const handleLogOut = () => {
    logout()
      .then((res) => {
        console.log(res?.user);
      })
      .catch((err) => console.error(err));
  };
  const navOption = (
    <>
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Link to={"/menu"}>Menu</Link>
      </li>

      <li>
        <Link to={"/order/salad"}>Order Food</Link>
      </li>
      <li className="badge-outline">
        <Link to={"/dashboard/cart"} className="">
          <BsFillCartCheckFill></BsFillCartCheckFill>+{cart.length}
        </Link>
      </li>

      {user && isAdmin && (
        <li>
          <Link to={"/dashboard/adminHome"}>Admin Home</Link>
        </li>
      )}
      {user && !isAdmin && (
        <li>
          <Link to={"/dashboard/userHome"}>User Home</Link>
        </li>
      )}
    </>
  );

  return (
    <div>
      <div className="navbar fixed z-10 bg-opacity-30 container bg-black text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navOption}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">BISTRO BOSS</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-white">{navOption}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <li className="dropdown dropdown-hover text-black bg-transparent">
              <label tabIndex={0} className="btn m-1">
                <h3>{user?.email}</h3>
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a>{user?.displayName}</a>
                </li>
                <li>
                  <a onClick={handleLogOut}>Logout</a>
                </li>
              </ul>
            </li>
          ) : (
            <li>
              <Link to={"/login"}>Login</Link>
            </li>
          )}
          {user && (
            <img
              className="h-[44px] rounded-full ml-3"
              src={user?.photoURL}
              alt=""
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
