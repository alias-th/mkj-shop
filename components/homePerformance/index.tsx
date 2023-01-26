import { Grid } from "@mui/material";
import { FC } from "react";

interface Props {}

const HomePerformance: FC<Props> = (props): JSX.Element => {
  return <Grid container sx={{ minHeight: "500px", marginTop: "50px" }} bgcolor="#b9fffb"></Grid>;
};

export default HomePerformance;
