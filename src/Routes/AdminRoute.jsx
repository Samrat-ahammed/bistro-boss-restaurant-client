import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../CustomHooks/useAdmin";
import useAuth from "../CustomHooks/useAuth";

const AdminRoute = ({ children }) => {
  const [isAdmin, isAdminPending] = useAdmin();
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading || isAdminPending) {
    return <span className="loading loading-ball loading-lg"></span>;
  }
  if (user && isAdmin) {
    return children;
  }
  return <Navigate to={"/login"} state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;
