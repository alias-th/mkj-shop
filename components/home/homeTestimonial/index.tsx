import { FC } from "react";
import { Grid, Typography, Box, Paper } from "@mui/material";
import TestimonialCard from "./TestimonialCard";
interface Props {}

const HomeTestimonial: FC<Props> = (props): JSX.Element => {
  return (
    <Paper elevation={0} sx={{ backgroundColor: "#ffffff" }}>
      <Grid
        container
        marginTop="100px"
        marginLeft={0}
        padding={{ xs: "20px", md: "0px" }}
        sx={{ gap: "20px" }}
      >
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "0px !important",
          }}
        >
          <Box>
            <Typography variant="h4" color="inherit" gutterBottom>
              รีวิวจากลูกค้า
            </Typography>
          </Box>
        </Grid>

        <Box sx={{ maxWidth: "100%", height: "100%" }}>
          <TestimonialCard />
        </Box>
      </Grid>
    </Paper>
  );
};

export default HomeTestimonial;
