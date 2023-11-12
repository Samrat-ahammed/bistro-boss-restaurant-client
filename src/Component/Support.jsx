import SectionTitle from "./SectionTitle";
import chef from ".././assets/home/chef-service.jpg";
import Card from "../Pages/Shared/Card";
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
        <Card img={chef} />
        <Card img={chef} />
        <Card img={chef} />
      </div>
    </div>
  );
};

export default Support;
