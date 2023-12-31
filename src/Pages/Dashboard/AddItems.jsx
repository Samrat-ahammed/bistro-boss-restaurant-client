import { useForm } from "react-hook-form";
import SectionTitle from "../../Component/SectionTitle";
import useAxiosPublic from "../../CustomHooks/axiosPublic";
import useAxios from "../../CustomHooks/useAxios";
import Swal from "sweetalert2";
const image_hosting_kye = import.meta.env.VITE_IMAGE_HOSTING_KYE;

const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_kye}`;
const AddItems = () => {
  const axiosPublic = useAxiosPublic();
  const { register, handleSubmit } = useForm();
  const axiosSecure = useAxios();
  const onSubmit = async (data) => {
    console.log(data);

    const imageFile = { image: data.image[0] };

    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      const menuItem = {
        name: data.name,
        category: data.category,
        recipe: data.recipe,
        price: parseFloat(data.price),
        image: res.data.data.display_url,
      };
      const menuRes = await axiosSecure.post("/menu", menuItem);
      console.log(menuRes);
      if (menuRes.data.insertedId) {
        // successfull sms
        Swal.fire({
          title: "Add Item Success",
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
      }
    }
  };
  return (
    <div>
      <SectionTitle
        subtitle={"----What is that-----"}
        title={"Add Items"}
      ></SectionTitle>

      <form className="mx-auto items-center" onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-6">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              {...register("Name")}
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
            />
          </div>

          <div className="flex gap-6">
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                {...register("price")}
                type="text"
                placeholder="Price"
                className="input input-bordered"
              />
            </div>

            <div className="w-1/2">
              <label className="label">
                <span className="label-text">Select Your Category</span>
              </label>
              <select
                defaultValue={"default"}
                className="select select-primary w-full"
                {...register("category")}
              >
                <option disabled value="default">
                  Select Your Category
                </option>
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="soup">soups</option>
                <option value="dessert">Desserts</option>
                <option value="drinks">Drinks</option>
              </select>
            </div>
          </div>
          <div>
            <textarea
              {...register("recipe")}
              className="textarea textarea-warning textarea-lg w-full"
              placeholder="Recipe Details"
            ></textarea>
            <input
              {...register("image")}
              type="file"
              className="file-input file-input-bordered file-input-secondary w-full max-w-xs"
            />
          </div>
        </div>
        <input
          className="btn btn-secondary flex items-center justify-center mx-auto"
          type="submit"
          value="Add Item"
        />
      </form>
    </div>
  );
};

export default AddItems;
