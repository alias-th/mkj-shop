import HomeFooter from "@/components/home/homeFooter";
import Header from "@/components/home/homeHeader";
import Product from "@/components/product";

import { Container, Box, Grid, Button } from "@mui/material";
import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]";

type Props = InferGetServerSidePropsType<typeof getServerSideProps>;
const ProductPage: NextPage<Props> = ({ mySession }) => {
  return (
    <>
      <Header mySession={mySession} />
      <Container
        maxWidth={"xl"}
        sx={{
          minWidth: "250px",
          height: "100%",
          // backgroundColor: "#f8f8f8",
          padding: "20px",
          marginTop: "20px",
        }}
      >
        <Product />
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

export default ProductPage;
