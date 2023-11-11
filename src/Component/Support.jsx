import SectionTitle from "./SectionTitle";
import chef from ".././assets/home/chef-service.jpg";
const Support = () => {
  return (
    <div className="my-24 text-center space-y-10">
      <div className="bg-black text-white py-10">
        <h2 className="text-4xl font-bold">Call Us: +88 0192345678910</h2>
      </div>

      <SectionTitle
        subtitle={"---Should Try---"}
        title={"CHEF RECOMMENDS"}
      ></SectionTitle>

      <div className="grid grid-cols-3 gap-4 shadow">
        <div className="card bg-base-100">
          <figure className="">
            <img src={chef} alt="Shoes" className="w-full h-full" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Caeser Salad</h2>
            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <div className="card-actions">
              <button className="btn btn-outline">add to cart</button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100">
          <figure className="">
            <img src={chef} alt="" className="w-full h-full" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Caeser Salad</h2>
            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <div className="card-actions">
              <button className="btn btn-outline">add to cart</button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100">
          <figure className="">
            <img src={chef} alt="Shoes" className="w-full h-full" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Caeser Salad</h2>
            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <div className="card-actions">
              <button className="btn btn-outline">add to cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
