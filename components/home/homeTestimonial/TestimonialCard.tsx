import { FC } from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Grid, Avatar } from "@mui/material";
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
import { homeUser } from "@/data/home";

interface Props {}

const TestimonialCard: FC<Props> = (props): JSX.Element => {
  const matches900 = useMediaQuery("(max-width:900px)");
  return (
    <Swiper
      slidesPerView={2}
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
      {homeUser
        ? homeUser.map((item, i) => {
            return (
              <SwiperSlide key={i}>
                <Card sx={{ height: { xs: "200px", md: "330px" }, display: "flex" }}>
                  <CardActionArea>
                    <CardContent
                      component="div"
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        padding: { xs: "10px", md: "16px" },
                      }}
                    >
                      <Avatar
                        alt="Remy Sharp"
                        src={item.image}
                        sx={{
                          width: { xs: "50px", md: "100px" },
                          height: { xs: "50px", md: "100px" },
                        }}
                      />
                    </CardContent>
                    <CardContent sx={{ padding: { xs: "10px", md: "16px" } }}>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ fontSize: `${matches900 && "1rem"}` }}
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
};

export default TestimonialCard;
