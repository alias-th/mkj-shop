import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { homeProduct } from "@/data/home";
import Box from "@mui/material/Box";
import Link from "next/link";

export default function ProductsCard() {
  const card = homeProduct.map((item, i) => {
    return (
      <Link href={`/product/${item.title}`} key={i}>
        <Card sx={{ width: { xs: "min-content" } }} key={i}>
          <CardActionArea>
            <CardMedia
              component="img"
              sx={{
                height: { xs: "150px", lg: "200px", xl: "250px" },
                width: { xs: "150px", lg: "200px", xl: "250px" },
              }}
              image={item.image}
              alt="green iguana"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ fontSize: { xs: "1.6rem" } }}
              >
                {item.title}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ fontSize: { xs: "1.4rem" } }}
              >
                Lizards are a widespread group of squamate reptiles,
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
}
