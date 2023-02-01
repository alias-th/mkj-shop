import HomeFooter from "@/components/home/homeFooter";
import Header from "@/components/home/homeHeader";
import Product from "@/components/product";

import { Container, Box, Grid, Button } from "@mui/material";
import { NextPage } from "next";

interface Props {}

const ProductPage: NextPage<Props> = () => {
  return (
    <>
      <Header />
      <Container
        maxWidth={"xl"}
        sx={{
          minWidth: "250px",
          height: "100%",
          // backgroundColor: "#f8f8f8",
          padding: "20px",
          marginTop: "20px",
        }}
      >
        <Product />
      </Container>
      <HomeFooter />
    </>
  );
};

export default ProductPage;
