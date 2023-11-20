import { useForm } from "react-hook-form";
import SectionTitle from "../../Component/SectionTitle";

const AddItems = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
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
                className="select select-primary w-full"
                {...register("category")}
              >
                <option disabled selected>
                  Select Your Category
                </option>
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="soups">soups</option>
                <option value="desserts">Desserts</option>
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
