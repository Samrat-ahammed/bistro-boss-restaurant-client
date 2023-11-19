import { useQuery } from "@tanstack/react-query";
import useAxios from "../../CustomHooks/useAxios";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import Swal from "sweetalert2";
const AllUsers = () => {
  const axiosSecure = useAxios();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get(
        "/users"
        // ,{
        //   headers: {
        //     authorization: `Bearer ${localStorage.getItem("access_token")}`,
        //   },
        // }
      );
      return res.data;
    },
  });

  const handleDelete = (id) => {
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
        axiosSecure.delete(`/users/${id}`).then((res) => {
          console.log(res);
          if (res.data.deletedCount > 0) {
            refetch();
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

  const handleMakeAdmin = (user) => {
    console.log(user);
    axiosSecure.patch(`/users/admin/${user._id}`).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${user.name} is an Admin Now!`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };
  return (
    <div>
      <h2 className="text-violet-700 font-bold text-3xl">
        All Users : {users.length}
      </h2>

      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td
                  onClick={() => handleMakeAdmin(item)}
                  className="btn btn-primary mr-5"
                >
                  {item.role === "admin" ? (
                    "Admin"
                  ) : (
                    <FaUser className="text-white text-2xl" />
                  )}
                </td>
                <td onClick={() => handleDelete(item._id)} className="btn">
                  <RiDeleteBin2Fill className="text-red-800" />
                  Delete
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
