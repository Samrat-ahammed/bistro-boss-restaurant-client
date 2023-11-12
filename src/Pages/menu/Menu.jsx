import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover";
import coverImg from "../../assets/menu/banner3.jpg";
const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro-Boss | Menu</title>
      </Helmet>
      <Cover img={coverImg} title="OUR MENU"></Cover>
      <Cover img={coverImg} title="OUR MENU"></Cover>
      <Cover img={coverImg} title="OUR MENU"></Cover>
      <Cover img={coverImg} title="OUR MENU"></Cover>
    </div>
  );
};

export default Menu;
