import Header from "@/components/mainHeader";
import Container from "@mui/material/Container";
import { NextPage } from "next";

interface Props {}

const Home: NextPage<Props> = () => {
  return (
    <>
      <Header />
      <Container maxWidth="xl">
        <p>Home</p>;
      </Container>
    </>
  );
};

export default Home;
