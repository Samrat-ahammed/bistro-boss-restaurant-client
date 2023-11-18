import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../Provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosPublic from "../CustomHooks/axiosPublic";

const SocialLogin = () => {
  const { googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const axiosPublic = useAxiosPublic();

  const form = location.state?.from?.pathname || "/";
  const handleGoogleLogin = () => {
    googleSignIn()
      .then((result) => {
        console.log(result.user);
        const authUser = {
          email: result.user?.email,
          name: result.user?.displayName,
        };
        axiosPublic.post("/users", authUser).then((res) => {
          console.log(res.data);
          navigate(form, { replace: true });
        });
        Swal.fire({
          title: "User Login Successfully",
          showClass: {
            popup: `
                animate__animated
                animate__fadeInUp
                animate__faster
              `,
          },
          hideClass: {
            popup: `
                animate__animated
                animate__fadeOutDown
                animate__faster
              `,
          },
        });
      })
      .catch((err) => console.error(err));
  };
  return (
    <div onClick={handleGoogleLogin} className="w-full">
      <button className="btn btn-outline w-full" type="button">
        Google
        <FaGoogle className="text-red-600"></FaGoogle>
      </button>
    </div>
  );
};

export default SocialLogin;
