import { FC } from "react";
import { Grid, Typography, Box, Paper } from "@mui/material";
import CategoryCard from "./CategoryCard";

interface Props {}

const HomeCategories: FC<Props> = (props): JSX.Element => {
  return (
    <Paper elevation={0} sx={{ backgroundColor: "#ffffff" }}>
      <Grid
        container
        marginTop="50px"
        marginLeft={0}
        padding="16px"
        sx={{ gap: "20px", minHeight: "550px" }}
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
              หมวดหมู่
            </Typography>
          </Box>
          <Box>
            <Typography variant="h6" color="inherit" gutterBottom>
              ดูทั้งหมด
            </Typography>
          </Box>
        </Grid>

        <Box sx={{ maxWidth: "100%", height: "100%" }}>
          <CategoryCard />
        </Box>
      </Grid>
    </Paper>
  );
};

export default HomeCategories;
