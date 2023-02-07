import Cart from "@/components/cart";
import HomeFooter from "@/components/home/homeFooter";
import Header from "@/components/home/homeHeader";
import { Box, Container } from "@mui/material/";
import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from "next";
import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react";
import { authOptions } from "./api/auth/[...nextauth]";

type Props = InferGetServerSidePropsType<typeof getServerSideProps>;
const cart: NextPage<Props> = ({ mySession }) => {
  return (
    <>
      <Header mySession={mySession} />

      <Container
        maxWidth={"xl"}
        sx={{
          minWidth: "250px",
          width: "100%",
          height: "100%",
          backgroundColor: "white",
          padding: "20px",
          marginTop: "20px",
        }}
      >
        <Cart />
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

export default cart;
