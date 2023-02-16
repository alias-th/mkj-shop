import { FC } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Grid from "@mui/material/Grid";
import { homeProduct } from "../../../data/home";

interface Props {}

const ProductCard: FC<Props> = (props): JSX.Element => {
  const card = homeProduct.map((item, i) => {
    return (
      <Grid item xs={5} sm={5} md={2.1} key={i}>
        <Card sx={{ width: "250px", height: "min-content", maxWidth: "100%" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              image={item.image}
              alt={item.title}
              sx={{
                height: { xs: "70px", sm: "130px", md: "170px" },
              }}
            />
            <CardContent sx={{ padding: { xs: "5px", sm: "8px", md: "10px", lg: "16px" } }}>
              <Typography
                gutterBottom
                variant="subtitle2"
                component="div"
                sx={{ fontSize: { sx: "1rem", md: "1.2rem", lg: "1.6rem" }, whiteSpace: "nowrap" }}
              >
                {item.title}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ fontSize: { sx: "1rem", md: "1rem", lg: "1.6rem" } }}
              >
                Lizards are a widespread group of squamate reptiles,
              </Typography>
              <Typography variant="h6" color="text.secondary">
                250
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    );
  });

  return <>{card}</>;
};

export default ProductCard;
