import HomeAbout from "../../Component/HomeAbout";
import Banner from "./Banner";
import Category from "./Category";
import PopularMenu from "./PopularMenu";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <HomeAbout></HomeAbout>
      <PopularMenu></PopularMenu>
    </div>
  );
};

export default Home;
