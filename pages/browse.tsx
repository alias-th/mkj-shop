import ActiveLastBreadcrumb from "@/components/ActiveLastBreadcrumb";
import CategoryFilter from "@/components/browse/CategoryFilter";
import PaginationLarge from "@/components/browse/PaginationLarge";
import PopularityFilter from "@/components/browse/PopularityFilter";
import PriceFilter from "@/components/browse/PriceFilter";
import ProductsCard from "@/components/browse/productsCard";
import RatingFilter from "@/components/browse/RatingFilter";
import HomeFooter from "@/components/home/homeFooter";
import Header from "@/components/home/homeHeader";
import db from "@/utils/db";
import { Container, Box, Grid, Button } from "@mui/material";

import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from "next";
import { getServerSession, Session } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]";

import Product from "../models/Product";
import Category from "@/models/Category";
import SubCategory from "@/models/SubCategory";

type Props = InferGetServerSidePropsType<typeof getServerSideProps>;

const browse: NextPage<Props> = ({ mySession, products }) => {
  return (
    <>
      <Header mySession={mySession} />
      <Container
        maxWidth={"xl"}
        sx={{
          minWidth: "250px",
          height: "100%",
          backgroundColor: "white",
          padding: "20px",
          marginTop: "20px",
        }}
      >
        <Box display={"flex"} marginBottom="50px">
          <ActiveLastBreadcrumb />
        </Box>
        <Grid container spacing={10}>
          <Grid item xs={12} md={2.5}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "20px", fontSize: "1rem" }}>
              <PopularityFilter />
              <CategoryFilter />
              <PriceFilter />
              <RatingFilter />
              <Button variant="contained" color="info">
                ล้างทั้งหมด
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={9.5}>
            <ProductsCard products={products} />
          </Grid>
        </Grid>
        <PaginationLarge />
      </Container>
      <HomeFooter />
    </>
  );
};

interface ServerSideResponseProduct {
  products: Array<{
    id: string;
    name: string;
    description: string;
    brand: string;
    slug: string;
    category: string;
    details: [];
    subProducts: [];
    reviews: [];
    rating: number;
    refundPolicy: string;
    shipping: number;
  }>;
}

interface ServerSideResponse extends ServerSideResponseProduct {
  mySession: Session | null;
}

export const getServerSideProps: GetServerSideProps<ServerSideResponse> = async (context) => {
  const session = await getServerSession(context.req, context.res, authOptions);
  db.connectDb();

  const products = await Product.find();
  // const categories = await Category.find();
  // const subCategories = await SubCategory.find();

  const parsedProduct = JSON.parse(JSON.stringify(products));

  db.disconnectDb();

  return {
    props: {
      mySession: session,
      products: parsedProduct,
    },
  };
};

export default browse;
