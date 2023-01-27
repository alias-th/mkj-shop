import HomeCategories from "@/components/homeCategories";
import HomeFeatured from "@/components/homeFeatured";
import HomeFooter from "@/components/homeFooter";
import Header from "@/components/homeHeader";
import HomePerformance from "@/components/homePerformance";
import useMediaQuery from "@mui/material/useMediaQuery";
import Container from "@mui/material/Container";
import { NextPage } from "next";

interface Props {}

const Home: NextPage<Props> = () => {
  const matches320 = useMediaQuery("(max-width:320px)");
  console.log(matches320);
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
      </Container>
      <HomeFooter />
    </>
  );
};

export default Home;
