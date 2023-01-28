import HomeCategories from "@/components/home/homeCategories";
import HomeFeatured from "@/components/home/homeFeatured";
import HomeFooter from "@/components/home/homeFooter";
import Header from "@/components/home/homeHeader";
import HomePerformance from "@/components/home/homePerformance";
import useMediaQuery from "@mui/material/useMediaQuery";
import Container from "@mui/material/Container";
import { NextPage } from "next";
import HomeProduct from "@/components/home/homeProduct";
import ProductSwiper from "@/components/home/homeProduct/ProductCard";
import HomeTestimonial from "@/components/home/homeTestimonial";

interface Props {}

const Home: NextPage<Props> = () => {
  const matches320 = useMediaQuery("(max-width:320px)");

  return (
    <>
      <Header />
      <Container
        maxWidth={"xl"}
        sx={{
          minWidth: "250px",
          height: "100%",
          padding: `${matches320 && "0px"}`,
          margin: `${matches320 && "0px"}`,
        }}
      >
        <HomeFeatured />
        <HomeCategories />
        <HomePerformance />
        <HomeProduct />
        <HomeTestimonial />
      </Container>
      <HomeFooter />
    </>
  );
};

export default Home;
