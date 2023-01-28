import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper";

import { homeFeatured } from "@/data/home";
import { Paper } from "@mui/material";
import styles from "./styles.module.css";

import useMediaQuery from "@mui/material/useMediaQuery";

export default function ImageSlide() {
  // decreaseHight Swiper
  const matches950 = useMediaQuery("(max-width:950px)");

  return (
    <Swiper
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      loop={true}
      pagination={{
        dynamicBullets: true,
      }}
      modules={[Pagination, Autoplay]}
      className={`${styles.homeSwiper} ${matches950 && styles.decreaseHeight}`}
    >
      {homeFeatured.map((item, i) => {
        return (
          <SwiperSlide key={i}>
            <Paper
              sx={{
                height: "100%",
                position: "relative",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundImage: `url(${item.image})`,
              }}
            ></Paper>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
