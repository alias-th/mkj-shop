import Header from "@/components/home/homeHeader";
import { NextPage } from "next";
import { Container, Grid, Box } from "@mui/material";
import HomeFooter from "@/components/home/homeFooter";
import Contact from "@/components/contact";

import { useSession } from "next-auth/react";

interface Props {}

const contact: NextPage<Props> = () => {
  const { data: session, status } = useSession();

  return (
    <>
      <Header mySession={session} />
      <Container
        maxWidth={"xl"}
        sx={{
          minWidth: "250px",
          minHeight: "80vh",
          backgroundColor: "white",
          padding: "20px",
          marginTop: "20px",
          position: "relative",
        }}
      >
        <Grid container spacing={5}>
          <Contact />
        </Grid>
      </Container>
      <HomeFooter />
    </>
  );
};

export default contact;
