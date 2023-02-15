import { Box, Grid, Paper, Typography } from "@mui/material";
import { FC } from "react";
import ContentCard from "./ContentCard";
import MediaCard from "./MediaCard";

interface Props {}

const HomePerformance: FC<Props> = (props): JSX.Element => {
  return (
    <Grid
      container
      sx={{
        marginTop: "100px",
        alignContent: "start",
        padding: { xs: "20px", md: "0px" },
        gap: "20px",
      }}
    >
      <Grid item xs={12}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <p></p>
          <Typography variant="h4" color="inherit" gutterBottom>
            ผลงาน
          </Typography>
        </Box>
      </Grid>
      <Paper elevation={0} sx={{ backgroundColor: "#b9fffb4b", padding: "20px" }}>
        <Grid
          container
          wrap="nowrap"
          width="100%"
          gap="20px"
          alignItems={{ xs: "center", md: "stretch" }}
          flexDirection={{ xs: "column", md: "row" }}
        >
          <Grid item xs={12} md={6} width="100% ">
            <Box sx={{ height: "100%", width: "100%" }}>
              <MediaCard />
            </Box>
          </Grid>
          <Grid item xs={12} md={6} width="100%">
            <Box sx={{ width: "100%", height: "100%" }}>
              <ContentCard />
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default HomePerformance;
