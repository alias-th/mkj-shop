import Header from "@/components/home/homeHeader";
import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from "next";
import { Container, Grid, Box } from "@mui/material";
import HomeFooter from "@/components/home/homeFooter";
import Contact from "@/components/contact";

import { useSession } from "next-auth/react";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]";

type Props = InferGetServerSidePropsType<typeof getServerSideProps>;
const contact: NextPage<Props> = ({ mySession }) => {
  return (
    <>
      <Header />
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

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getServerSession(context.req, context.res, authOptions);

  return {
    props: {
      mySession: session,
    },
  };
};

export default contact;
