import HomeCategories from "@/components/homeCategories";
import HomeFeatured from "@/components/homeFeatured";
import Header from "@/components/homeHeader";
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
      </Container>
    </>
  );
};

export default Home;
