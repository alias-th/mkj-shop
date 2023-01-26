import { Box, Typography } from "@mui/material";
import { FC } from "react";

interface Props {}

const HomeFooter: FC<Props> = (props): JSX.Element => {
  return (
    <Box sx={{ height: "300px" }} component="footer">
      <Typography variant="h6" align="center" gutterBottom>
        Footer
      </Typography>
      <Typography variant="subtitle1" align="center" color="text.secondary" component="p">
        Something here to give the footer a purpose!
      </Typography>
    </Box>
  );
};

export default HomeFooter;
