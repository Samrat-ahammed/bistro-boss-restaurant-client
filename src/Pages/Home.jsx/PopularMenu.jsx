import SectionTitle from "../../Component/SectionTitle";
import MenuItem from "../Shared/MenuItem";
import useMenu from "../../CustomHooks/useMenu";

const PopularMenu = () => {
  const [menu] = useMenu();

  const popular = menu.filter((item) => item.category === "popular");

  // const [menu, setMenu] = useState([]);
  // useEffect(() => {
  //   fetch("/menu.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const popularItems = data.filter(
  //         (items) => items.category === "popular"
  //       );
  //       setMenu(popularItems);
  //     });
  // }, []);

  return (
    <div>
      <SectionTitle
        subtitle={"---Check it out---"}
        title={"FROM OUR MENU"}
      ></SectionTitle>

      <div className="grid grid-cols-2 gap-4">
        {popular.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <button className="btn btn-outline border-0 border-b-4 mx-auto items-center flex">
        Read More
      </button>
    </div>
  );
};

export default PopularMenu;
