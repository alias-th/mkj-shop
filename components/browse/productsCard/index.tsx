import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { homeProduct } from "@/data/home";
import Box from "@mui/material/Box";
import Link from "next/link";

interface Props {
  products: Array<{
    id: string;
    name: string;
    description: string;
    brand: string;
    slug: string;
    category: string;
    details: Array<{ name: string; value: string }>;
    subProducts: Array<{ images: Array<{ url: string }> }>;
    reviews: [];
    rating: number;
    refundPolicy: string;
    shipping: number;
  }>;
}

const ProductsCard: React.FC<Props> = ({ products }): JSX.Element => {
  const card = products.map((item, i) => {
    return (
      <Link href={`/product/${item.slug}?style=0`} key={i}>
        <Card sx={{ width: { xs: "min-content" } }} key={i}>
          <CardActionArea>
            <CardMedia
              component="img"
              sx={{
                height: { xs: "150px", lg: "200px", xl: "250px" },
                width: { xs: "150px", lg: "200px", xl: "250px" },
              }}
              image={item.subProducts[0].images[0].url}
              alt="green iguana"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ fontSize: { xs: "1.6rem" } }}
              >
                {item.name}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ fontSize: { xs: "1.4rem" } }}
              >
                {item.details[0].value.toString().substring(0, 50)}...
              </Typography>
              <Typography variant="h6" color="text.secondary">
                250 บาท
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
    );
  });

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: { xs: "center", lg: "flex-start" },
        width: "100%",
        flexWrap: "wrap",
        gap: "20px",
      }}
    >
      {card}
    </Box>
  );
};

export default ProductsCard;
