"use client";

import { motion } from "framer-motion";
import React from "react";

import { staggerContainer, textVariant } from "../utils/motion";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
// import 'swiper/css/effect-coverflow';
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Autoplay, FreeMode } from "swiper";
import { homeImagesData } from "../constants";

const HomeCarousel = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="mx-auto md:mt-10 mb-[-2rem] md:mb-20"
    >
      <motion.div
        variants={textVariant(0.3)}
        className="flex justify-center items-center h-[18rem] w-[90vw] bg-transparent mx-auto lg:mt-[3rem] "
      >
        <Swiper
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          grabCursor={true}
          loop={true}
          height={"auto"}
          modules={[Autoplay, Pagination, Navigation]}
          className="py-[3rem] w-[90vw] lg:w-[60rem]  bg-transparent mx-auto"
        >
          {homeImagesData.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="relative  lg:w-[50rem] w-full my-auto mx-auto rounded-t-lg md:rounded-lg ">
                <img
                  src={item.url}
                  className={
                    "overflow-hidden  lg:h-[30rem]  rounded-t-lg md:rounded-lg w-full lg:w-[50rem] mx-auto bg-transparent  transition-all"
                  }
                  alt={`equipment ${i}`}
                  lazy={"true"}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </motion.div>
  );
};

export default HomeCarousel;
