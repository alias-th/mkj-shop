import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Grid } from "@mui/material";
import styles from "./styles.module.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper";
import { homeProduct } from "@/data/home";

export default function CategoryCard() {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      pagination={{
        type: "progressbar",
        clickable: true,
      }}
      className={styles.cardSwiper}
      modules={[FreeMode, Pagination]}
      breakpoints={{
        450: {
          slidesPerView: 2,
        },
        630: {
          slidesPerView: 3,
        },
        920: {
          slidesPerView: 4,
        },
        1232: {
          slidesPerView: 5,
        },
      }}
    >
      {homeProduct
        ? homeProduct.map((item, i) => {
            return (
              <SwiperSlide key={i}>
                <Card sx={{ maxHeight: "350px" }}>
                  <CardActionArea>
                    <CardMedia component="img" height="200" image={item.image} alt={item.title} />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {item.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore,
                        laboriosam.
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </SwiperSlide>
            );
          })
        : null}
    </Swiper>
  );
}
