import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";

import styles from "../styles/Slider.module.css";
import { sliderImages } from "../data/dummyData";

const Slider = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  return (
    <div>
      <Swiper
        // navigation={true}
        pagination={{ clickable: true }}
        modules={[Navigation, Autoplay, Pagination]}
        autoplay={true}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper.activeIndex)}
        className={[styles.swiper, "bg-red-200"].join(" ")}
      >
        {sliderImages.slice(0, 4).map((item) => (
          <SwiperSlide key={item.id} className="relative">
            <img
              src={item.src}
              alt="slider"
              className="h-48 md:h-96 w-full object-cover"
            />
            <div
              className="z-2 absolute bottom-0 w-full flex items-end h-48 md:h-96 bg-opacity-30
          "
            >
              <div className="bg-gray-900 bg-opacity-40 h-full flex w-full">
                <div className="container max-w-6xl flex mx-auto  items-center flex p-8">
                  <div className="space-y-4">
                    <div className="text-white font-bold text-3xl leading-none drop-shadow">
                      {item.service}
                    </div>
                    <p className="text-white">{item.description}</p>
                    <button className="text-white border py-4 px-6 font-semibold rounded-md">
                      Find out more
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
