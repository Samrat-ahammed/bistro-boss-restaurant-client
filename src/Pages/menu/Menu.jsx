import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover";
import coverImg from "../../assets/menu/banner3.jpg";
import dessertimg from "../../assets/menu/dessert-bg.jpeg";
import saladBg from "../../assets/menu/pizza-bg.jpg";
import pizzaImg from "../../assets/menu/pizza-bg.jpg";
import useMenu from "../../CustomHooks/useMenu";
import SectionTitle from "../../Component/SectionTitle";
import MenuCategory from "./MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const salad = menu.filter((item) => item.category === "salad");
  const drinks = menu.filter((item) => item.category === "drinks");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");

  return (
    <div className="space-y-10">
      <Helmet>
        <title>Bistro-Boss | Menu</title>
      </Helmet>
      <div className="space-y-10">
        <Cover img={coverImg} title="OUR MENU"></Cover>
        <SectionTitle
          title={"---Don't miss---"}
          subtitle={"TODAY'S OFFER"}
        ></SectionTitle>
        <MenuCategory item={offered}></MenuCategory>
      </div>
      <div className="space-y-10">
        <MenuCategory
          title={"DESSERTS"}
          coverImg={dessertimg}
          item={offered}
        ></MenuCategory>
      </div>
      <div className="space-y-10">
        <MenuCategory
          title={"dessert"}
          coverImg={saladBg}
          item={dessert}
        ></MenuCategory>
      </div>
      <div>
        <MenuCategory
          title={"salad"}
          coverImg={dessertimg}
          item={salad}
        ></MenuCategory>
      </div>
      <div>
        <MenuCategory
          title={"drinks"}
          coverImg={dessertimg}
          item={drinks}
        ></MenuCategory>
      </div>
      <div>
        <MenuCategory
          title={"pizza"}
          coverImg={pizzaImg}
          item={pizza}
        ></MenuCategory>
      </div>
    </div>
  );
};

export default Menu;
