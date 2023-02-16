import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Grid } from "@mui/material";
import styles from "./styles.module.css";
import useMediaQuery from "@mui/material/useMediaQuery";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper";
import { homeProduct } from "@/data/home";
import Box from "@mui/material/Box/Box";

export default function CategoryCard() {
  const matches500 = useMediaQuery("(max-width:500px)");
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      pagination={{
        type: "progressbar",
        clickable: true,
      }}
      className={`${styles.cardSwiper}`}
      modules={[FreeMode, Pagination]}
      breakpoints={{
        450: {
          slidesPerView: 2,
        },
        630: {
          slidesPerView: 2,
        },
        920: {
          slidesPerView: 3,
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
                <Card
                  sx={{
                    width: "250px",
                    display: "flex",
                    flexGrow: 1,
                  }}
                >
                  <CardActionArea>
                    <CardMedia component="img" image={item.image} alt={item.title} />
                    <CardContent sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        sx={{ fontSize: `${matches500 && "1.6rem"}`, whiteSpace: "nowrap" }}
                      >
                        {item.title}
                      </Typography>

                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ fontSize: `${matches500 && "1.6rem"}` }}
                      >
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
