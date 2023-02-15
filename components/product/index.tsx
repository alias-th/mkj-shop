import { ResponseProduct } from "@/pages/product/[slug]";
import { Paper, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { display } from "@mui/system";
import { FC } from "react";
import ActiveLastBreadcrumb from "../ActiveLastBreadcrumb";
import ProductDetails from "./ProductDetails";
import ProductImagesSwiperList from "./ProductImagesSwiperList";
import ProductOther from "./ProductOther";
import ProductReview from "./ProductReview";

interface Props extends ResponseProduct {}

const Product: FC<Props> = ({ product }): JSX.Element => {
  // console.log(product);
  return (
    <>
      <Box display={"flex"} marginBottom="50px">
        <ActiveLastBreadcrumb />
      </Box>
      <Grid container spacing={10}>
        <Grid
          item
          lg={12}
          xl={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            width: "100%",
          }}
        >
          <ProductImagesSwiperList product={product} />

          <Box sx={{ display: { xs: "none", xl: "flex" }, gap: "20px", flexDirection: "column" }}>
            <Typography
              component="h4"
              variant="h4"
              color="inherit"
              gutterBottom
              alignContent="start"
              marginTop="50px"
            >
              รีวิว
            </Typography>
            <ProductReview />
            <ProductReview />
            <ProductReview />
            <ProductReview />
          </Box>
        </Grid>
        <Grid item lg={12} xl={6}>
          <ProductDetails product={product} />
          {/* <ProductDetails /> */}
        </Grid>
        <Grid
          item
          xs={12}
          sx={{ display: { xs: "flex", xl: "none" }, flexDirection: "column", gap: "20px" }}
        >
          <Typography component="h4" variant="h4" color="inherit" gutterBottom alignContent="start">
            รีวิว
          </Typography>
          <ProductReview />
          <ProductReview />
          <ProductReview />
          <ProductReview />
        </Grid>
        {/* <Grid item xs={12}>
          <ProductOther />
        </Grid> */}
      </Grid>
    </>
  );
};

export default Product;
