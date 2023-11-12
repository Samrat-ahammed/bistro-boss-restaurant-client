import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import order from "../assets/shop/banner2.jpg";
import Cover from "./Shared/Cover";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";
import useMenu from "../CustomHooks/useMenu";
import FootCard from "../Component/FootCard";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
const OrderFood = () => {
  const categories = ["salad", "pizza", "soup", "dessert", "drinks"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);

  console.log(category);
  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const salad = menu.filter((item) => item.category === "salad");
  const drinks = menu.filter((item) => item.category === "drinks");
  const pizza = menu.filter((item) => item.category === "pizza");
  const soups = menu.filter((item) => item.category === "soup");

  return (
    <div className="space-y-10">
      <Helmet>
        <title>Bistro-Boss | Order Food</title>
      </Helmet>
      <Cover img={order} title={"OUR FOOD"}></Cover>
      <Tabs
        defaultIndex={tabIndex}
        onSelect={(index) => setTabIndex(index)}
        className="font-bold uppercase"
      >
        <TabList>
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soups</Tab>
          <Tab>Desserts</Tab>
          <Tab>Drinks</Tab>
        </TabList>
        <TabPanel>
          <div className="grid md:grid-cols-4 gap-6">
            {salad.map((item) => (
              <FootCard key={item._id} item={item}></FootCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid md:grid-cols-4 gap-6">
            {pizza.map((item) => (
              <FootCard key={item._id} item={item}></FootCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          {" "}
          <div className="grid md:grid-cols-4 gap-6">
            {soups.map((item) => (
              <FootCard key={item._id} item={item}></FootCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          {" "}
          <div className="grid md:grid-cols-4 gap-6">
            {dessert.map((item) => (
              <FootCard key={item._id} item={item}></FootCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          {" "}
          <div className="grid md:grid-cols-4 gap-6">
            {drinks.map((item) => (
              <FootCard key={item._id} item={item}></FootCard>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default OrderFood;
