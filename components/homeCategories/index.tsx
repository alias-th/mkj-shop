import { FC } from "react";
import { Grid, Typography, Box, Paper } from "@mui/material";
import CategoryCard from "./CategoryCard";

interface Props {}

const HomeCategories: FC<Props> = (props): JSX.Element => {
  return (
    <Paper elevation={0} sx={{ backgroundColor: "#B9FFFC" }}>
      <Grid
        container
        marginTop="50px"
        width="100%"
        marginLeft={0}
        padding="16px"
        sx={{ gap: "20px" }}
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
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <CategoryCard />
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default HomeCategories;
