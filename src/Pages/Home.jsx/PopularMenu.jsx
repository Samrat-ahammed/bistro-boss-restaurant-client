import { useEffect } from "react";
import SectionTitle from "../../Component/SectionTitle";
import { useState } from "react";
import MenuItem from "../Shared/MenuItem";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("/menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItems = data.filter(
          (items) => items.category === "popular"
        );
        setMenu(popularItems);
      });
  }, []);

  return (
    <div>
      <SectionTitle
        subtitle={"---Check it out---"}
        title={"FROM OUR MENU"}
      ></SectionTitle>

      <div className="grid grid-cols-2 gap-4">
        {menu.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
    </div>
  );
};

export default PopularMenu;
