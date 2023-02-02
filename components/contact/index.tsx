import { Grid } from "@mui/material";
import { FC } from "react";
import ContactInfo from "./ContactInfo";
import ContactMap from "./ContactMap";

interface Props {}

const Contact: FC<Props> = (props): JSX.Element => {
  return (
    <>
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: { xs: "300px", sm: "400px", md: "600px" },
        }}
      >
        <ContactMap />
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <ContactInfo />
      </Grid>
    </>
  );
};

export default Contact;
