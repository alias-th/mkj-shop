import ActiveLastBreadcrumb from "@/components/ActiveLastBreadcrumb";
import CategoryFilter from "@/components/browse/CategoryFilter";
import PaginationLarge from "@/components/browse/PaginationLarge";
import PopularityFilter from "@/components/browse/PopularityFilter";
import PriceFilter from "@/components/browse/PriceFilter";
import ProductsCard from "@/components/browse/productsCard";
import RatingFilter from "@/components/browse/RatingFilter";
import HomeFooter from "@/components/home/homeFooter";
import Header from "@/components/home/homeHeader";
import Product from "@/components/product";
import ProductDetails from "@/components/product/ProductDetails";
import ProductImagesSwiperList from "@/components/product/ProductImagesSwiperList";
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
        }}
      >
        <Product />
      </Container>
      <HomeFooter />
    </>
  );
};

export default ProductPage;
