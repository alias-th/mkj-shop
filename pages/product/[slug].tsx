import HomeFooter from "@/components/home/homeFooter";
import Header from "@/components/home/homeHeader";
import Product from "@/components/product";
import ProductModel from "../../models/Product";
import db from "@/utils/db";

import { Container, Box, Grid, Button } from "@mui/material";
import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from "next";
import { getServerSession, Session } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]";

type Props = InferGetServerSidePropsType<typeof getServerSideProps>;
const ProductPage: NextPage<Props> = ({ product }) => {
  // console.log(product.reviews);
  return (
    <>
      <Header />
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
        <Product product={product} />
      </Container>
      <HomeFooter />
    </>
  );
};

export interface ResponseProduct {
  product: {
    id: string;
    name: string;
    description: string;
    brand: string;
    slug: string;
    category: string;
    details: Array<{ name: string; value: string }>;
    subProducts: Array<{
      series?: string;
      color?: {};
      description_images: [];
      sold: number;
      sku: string;
      images: Array<{ url: string; public_url: string }>;
      sizes: Array<{ size: string; qty: number; price: number; _id: string }>;
      discount: number;
    }>;
    reviews: [];
    rating: number;
    refundPolicy: string;
    shipping: number;
    images?: Array<{ url: string; public_url: string }>;
    price?: {
      size: string;
      qty: number;
      price: number;
    };
  };
}

interface ServerSideResponse extends ResponseProduct {}

export const getServerSideProps: GetServerSideProps<ServerSideResponse> = async (context) => {
  const { query } = context;
  const slug = query.slug as string;
  const size = (+query.size! as number) || (0 as number);
  const style = (+query.style! as number) || (0 as number);

  // console.log(query.slug);
  const session = await getServerSession(context.req, context.res, authOptions);

  db.connectDb();
  const product = await ProductModel.findOne({ slug }).lean();
  db.disconnectDb();

  const newProductStructure = {
    ...product,
    images: product?.subProducts[style].images,
    price: product?.subProducts[style].sizes[size],
  };
  // console.log(newProductStructure);

  return {
    props: {
      mySession: session,
      product: JSON.parse(JSON.stringify(newProductStructure)),
    },
  };
};

export default ProductPage;
