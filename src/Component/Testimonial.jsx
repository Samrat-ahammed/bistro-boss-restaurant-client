import SectionTitle from "./SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import "swiper/css";
import "@smastrom/react-rating/style.css";
import "swiper/css/navigation";
import { Rating } from "@smastrom/react-rating";
const Testimonial = () => {
  const [review, setReview] = useState([]);
  useEffect(() => {
    fetch("https://bistro-boss-server-eight-delta.vercel.appreviews")
      .then((res) => res.json())
      .then((data) => {
        setReview(data);
      });
  }, [setReview]);
  return (
    <div className="my-20">
      <SectionTitle
        title={"TESTIMONIALS"}
        subtitle={"---What Our Clients Say---"}
      ></SectionTitle>

      <div className="">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {review?.map((item) => (
            <SwiperSlide key={item._id}>
              <div className="m-20 items-center text-center space-y-6">
                <Rating
                  className="mx-auto
                "
                  value={item.rating}
                  style={{ maxWidth: 180 }}
                  readOnly
                />
                <p>{item.details}</p>
                <p className="uppercase text-orange-600">{item.name}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
