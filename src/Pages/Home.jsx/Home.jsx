import HomeAbout from "../../Component/HomeAbout";
import Support from "../../Component/Support";
import Testimonial from "../../Component/Testimonial";
import Banner from "./Banner";
import Category from "./Category";
import Featured from "./Featured";
import PopularMenu from "./PopularMenu";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <HomeAbout></HomeAbout>
      <PopularMenu></PopularMenu>
      <Support></Support>
      <Featured></Featured>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
