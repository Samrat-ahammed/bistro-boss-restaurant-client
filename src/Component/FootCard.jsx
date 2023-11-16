import Swal from "sweetalert2";
import useAuth from "../CustomHooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";

import useAxios from "../CustomHooks/useAxios";

const FootCard = ({ item }) => {
  const { _id, name, image, price, recipe } = item || {};
  const navigate = useNavigate("/");
  const location = useLocation();
  const axiosSecure = useAxios();
  const { user } = useAuth();
  const HandleAddCart = () => {
    if (user && user?.email) {
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        image,
        price,
        recipe,
      };

      axiosSecure.post("/carts", cartItem).then((res) => {
        console.log(res.data);
        if (res.data?.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${name}Add To Cart this item`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
    } else {
      Swal.fire({
        title: "Please Login First",
        text: "Please Login TO Add To Cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Go to Login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
  return (
    <div>
      <div className="card bg-base-100">
        <figure className="w-full">
          <img src={image} alt="Shoes" className="w-full h-full" />
          <p className="absolute right-0 top-0 mr-4 mt-4 bg-blue-700 px-3 py-2 rounded-lg text-white">
            price: ${price}
          </p>
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions">
            <button onClick={HandleAddCart} className="btn btn-outline">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FootCard;
