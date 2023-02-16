import HomeCategories from "@/components/home/homeCategories";
import HomeFeatured from "@/components/home/homeFeatured";
import HomeFooter from "@/components/home/homeFooter";
import Header from "@/components/home/homeHeader";
import HomePerformance from "@/components/home/homePerformance";
import useMediaQuery from "@mui/material/useMediaQuery";
import Container from "@mui/material/Container";
import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from "next";
import HomeProduct from "@/components/home/homeProduct";
import HomeTestimonial from "@/components/home/homeTestimonial";

const Home: NextPage = () => {
  const matches320 = useMediaQuery("(max-width:320px)");

  return (
    <>
      <Header />
      <Container
        maxWidth={"xl"}
        sx={{
          minWidth: "250px",
          height: "100%",
          padding: `${matches320 ? "0px" : "20px"}`,
          margin: `${matches320 ? "0px" : undefined}`,
          marginTop: "20px",
          backgroundColor: "white",
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
