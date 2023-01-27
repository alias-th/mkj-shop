import { FC } from "react";
import { Grid, Typography, Box, Paper } from "@mui/material";
import ProductTabs from "./ProductTabs";
import ProductCard from "./ProductCard";

interface Props {}

const HomeProduct: FC<Props> = (props): JSX.Element => {
  return (
    <Paper elevation={0} sx={{ backgroundColor: "#ffffff", height: "100%" }}>
      <Grid
        container
        marginTop="50px"
        marginLeft={0}
        padding={{ xs: "20px", md: "0px" }}
        sx={{ gap: { xs: "0px", md: "20px" } }}
        height="100%"
      >
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0px !important",
          }}
        >
          <Box>
            <Typography variant="h4" color="inherit" gutterBottom>
              สินค้าของเรา
            </Typography>
          </Box>
          <Box>
            <Typography variant="h6" color="inherit" gutterBottom>
              ดูทั้งหมด
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12}>
          <ProductTabs />
        </Grid>

        <Grid
          container
          width="100%"
          justifyContent={{ xs: "center", sm: "center", md: "space-between" }}
          gap={{ xs: "10px", sm: "20px", md: "25px" }}
          bgcolor="#B9FFFC"
          padding={{ xs: "10px", md: "20px" }}
        >
          <ProductCard />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default HomeProduct;
