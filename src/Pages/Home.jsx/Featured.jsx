import SectionTitle from "../../Component/SectionTitle";
import menuImg from "../../assets/home/featured.jpg";
import "./featured.css";
const Featured = () => {
  return (
    <div className="featured_section mb-10 py-10">
      <div>
        <SectionTitle
          title={"FROM OUR MENU"}
          subtitle={"---Check it out---"}
        ></SectionTitle>

        <div className="flex gap-10 items-center pb-16 pt-12 px-36">
          <div>
            <img src={menuImg} alt="" />
          </div>
          <div className="text-white">
            <p className="uppercase">March 20, 2023</p>
            <p className="uppercase font-semibold">WHERE CAN I GET SOME?</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              voluptate facere, deserunt dolores maiores quod nobis quas quasi.
              Eaque repellat recusandae ad laudantium tempore consequatur
              consequuntur omnis ullam maxime tenetur.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
