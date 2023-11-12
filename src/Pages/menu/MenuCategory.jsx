import { Link } from "react-router-dom";
import Cover from "../Shared/Cover";
import MenuItem from "../Shared/MenuItem";

const MenuCategory = ({ item, title, coverImg }) => {
  return (
    <div className="space-y-10">
      {title && <Cover img={coverImg} title={title}></Cover>}
      <div className="grid grid-cols-2 gap-4">
        {item.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <Link
        to={`/order/${title}`}
        className="w-1/5 btn btn-outline border-0 border-b-4 mx-auto flex justify-center"
      >
        ORDER YOUR FAVOURITE FOOD
      </Link>
    </div>
  );
};

export default MenuCategory;
