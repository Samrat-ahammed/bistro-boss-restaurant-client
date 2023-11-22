import { RiDeleteBin2Fill, RiEditFill } from "react-icons/ri";
import SectionTitle from "../../Component/SectionTitle";
import useMenu from "../../CustomHooks/useMenu";
import Swal from "sweetalert2";
import useAxios from "../../CustomHooks/useAxios";
import { Link } from "react-router-dom";

const ManageItems = () => {
  const [menu, , refetch] = useMenu();
  const axiosSecure = useAxios();

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
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/menu/${id}`);
        console.log(res);
        refetch();
        if (res.deletedCount > 0) {
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        }
      }
    });
  };

  const handleUpdate = (id) => {
    console.log(id);
  };

  return (
    <div>
      <SectionTitle
        title={"Manage Item"}
        subtitle={"--------Whats news------"}
      ></SectionTitle>

      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {menu.map((item, index) => (
                <tr key={item._id}>
                  <th>
                    <label>{index + 1}</label>
                  </th>
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
                  <td>{item.recipe}</td>
                  <td>{item.price}</td>
                  <th>
                    <Link
                      to={`/dashboard/update/${item._id}`}
                      onClick={() => handleUpdate(item._id)}
                      className="btn btn-ghost bg-orange-500"
                    >
                      Update<RiEditFill className="text-white"></RiEditFill>
                    </Link>
                  </th>
                  <th>
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="btn btn-ghost bg-red-500"
                    >
                      Delete <RiDeleteBin2Fill className="text-white" />
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageItems;
