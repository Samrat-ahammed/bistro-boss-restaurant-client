import useAuth from "../../CustomHooks/useAuth";

const AdminHome = () => {
  const { user } = useAuth() || {};
  return (
    <div>
      <h2 className="text-3xl font-bold text-orange-300">
        <span>Welcome Back : </span>
        {user?.displayName ? user?.displayName : "Back"}
      </h2>
    </div>
  );
};

export default AdminHome;
