import Swal from "sweetalert2";
import useCart from "../../CustomHooks/useCart";
import useAxios from "../../CustomHooks/useAxios";
const Cart = () => {
  const [cart, refetch] = useCart();
  const axiosSecure = useAxios();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  const handleDelete = (id) => {
    console.log(id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/carts/${id}`).then((res) => {
          console.log(res);
          refetch();
          if (res?.data?.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };
  return (
    <div>
      <div className="flex justify-around">
        <h1 className="text-3xl font-bold">Total Produce : {cart.length}</h1>
        <h1 className="text-3xl font-bold">Price : {totalPrice}</h1>
        <button className="btn btn-outline">Pay</button>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Action</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {cart?.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}.</td>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{item.name}</div>
                    </div>
                  </div>
                </td>

                <td>${item.price}</td>
                <th>
                  {/* <RiDeleteBin5Fill className="btn btn-ghost btn-xs" /> */}
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="btn btn-ghost btn-xs text-red-900"
                  >
                    Delete
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cart;
