import ActiveLastBreadcrumb from "@/components/ActiveLastBreadcrumb";
import CategoryFilter from "@/components/browse/CategoryFilter";
import PaginationLarge from "@/components/browse/PaginationLarge";
import PopularityFilter from "@/components/browse/PopularityFilter";
import PriceFilter from "@/components/browse/PriceFilter";
import ProductsCard from "@/components/browse/productsCard";
import RatingFilter from "@/components/browse/RatingFilter";
import HomeFooter from "@/components/home/homeFooter";
import Header from "@/components/home/homeHeader";
import { Container, Box, Grid, Button } from "@mui/material";

import { NextPage } from "next";

interface Props {}

const browse: NextPage<Props> = () => {
  return (
    <>
      <Header />
      <Container
        maxWidth={"xl"}
        sx={{
          minWidth: "250px",
          height: "100%",
          backgroundColor: "white",
          padding: "20px",
          marginTop: "20px",
        }}
      >
        <Box display={"flex"} marginBottom="50px">
          <ActiveLastBreadcrumb />
        </Box>
        <Grid container spacing={10}>
          <Grid item xs={12} md={2.5}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "20px", fontSize: "1rem" }}>
              <PopularityFilter />
              <CategoryFilter />
              <PriceFilter />
              <RatingFilter />
              <Button variant="contained" color="info">
                ล้างทั้งหมด
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={9.5}>
            <ProductsCard />
          </Grid>
        </Grid>
        <PaginationLarge />
      </Container>
      <HomeFooter />
    </>
  );
};

export default browse;