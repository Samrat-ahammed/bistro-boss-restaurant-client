import { useForm } from "react-hook-form";
import SectionTitle from "../../Component/SectionTitle";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosPublic from "../../CustomHooks/axiosPublic";
import useAxios from "../../CustomHooks/useAxios";

const image_hosting_kye = import.meta.env.VITE_IMAGE_HOSTING_KYE;

const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_kye}`;

const Update = () => {
  const { name, category, price, recipe, _id, image } = useLoaderData();
  const axiosSecure = useAxios();
  const axiosPublic = useAxiosPublic();
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
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
        image: res.data.data.display_url || "",
      };
      const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);
      console.log(menuRes);
      if (menuRes.data.modifiedCount > 0) {
        // successfull sms
        Swal.fire({
          title: "Update Item Success",
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
        title={"Update Items"}
      ></SectionTitle>

      <form className="mx-auto items-center" onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-6">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              {...register("name")}
              type="text"
              defaultValue={name}
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
                defaultValue={price}
                placeholder="Price"
                className="input input-bordered"
              />
            </div>

            <div className="w-1/2">
              <label className="label">
                <span className="label-text">Select Your Category</span>
              </label>
              <select
                defaultValue={category}
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
              defaultValue={recipe}
              className="textarea textarea-warning textarea-lg w-full"
              placeholder="Recipe Details"
            ></textarea>
            <input
              {...register("image")}
              // defaultValue={image}
              type="file"
              className="file-input file-input-bordered file-input-secondary w-full max-w-xs"
            />
          </div>
        </div>
        <input
          className="btn btn-secondary flex items-center justify-center mx-auto"
          type="submit"
          value="Update Items"
        />
      </form>
    </div>
  );
};

export default Update;
