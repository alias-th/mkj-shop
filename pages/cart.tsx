import Cart from "@/components/cart";
import HomeFooter from "@/components/home/homeFooter";
import Header from "@/components/home/homeHeader";
import { Box, Container } from "@mui/material/";
import { NextPage } from "next";

interface Props {}

const cart: NextPage<Props> = () => {
  return (
    <>
      <Header />

      <Container
        maxWidth={"xl"}
        sx={{
          minWidth: "250px",
          width: "100%",
          height: "100%",
          backgroundColor: "white",
          padding: "20px",
          marginTop: "20px",
        }}
      >
        <Cart />
      </Container>

      <HomeFooter />
    </>
  );
};

export default cart;
