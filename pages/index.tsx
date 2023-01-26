import HomeCategories from "@/components/homeCategories";
import HomeFeatured from "@/components/homeFeatured";
import HomeFooter from "@/components/homeFooter";
import Header from "@/components/homeHeader";
import HomePerformance from "@/components/homePerformance";

import Container from "@mui/material/Container";
import { NextPage } from "next";

interface Props {}

const Home: NextPage<Props> = () => {
  return (
    <>
      <Header />
      <Container maxWidth="xl" sx={{ minWidth: "250px" }}>
        <HomeFeatured />
        <HomeCategories />
        <HomePerformance />
      </Container>
      <HomeFooter />
    </>
  );
};

export default Home;
