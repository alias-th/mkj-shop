import { Box, Grid, IconButton, Paper, Typography } from "@mui/material";
import { FC } from "react";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import DeleteIcon from "@mui/icons-material/Delete";
import Image from "next/image";
import { products } from "@/data/product";
import styles from "./styles.module.css";

interface Props {}

const CartItemsList: FC<Props> = (props): JSX.Element => {
  const itemsList = products.map((item, i) => {
    return (
      <Paper elevation={1} sx={{ padding: "20px" }} key={i}>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <Box sx={{ justifyContent: "center", flex: "0.5", display: "flex" }}>
            <Image
              className={styles.itemImage}
              src={item.image}
              key={i}
              alt={item.title}
              fill
              sizes="(max-width: 768px) 100vw,
          (max-width: 1200px) 50vw,
          33vw"
            />
          </Box>
          <Box sx={{ flex: "1" }}>
            <Typography
              component="h4"
              variant="h6"
              color="inherit"
              gutterBottom
              alignContent="start"
            >
              {item.title}
            </Typography>
            <Typography variant="body1" color="inherit" fontWeight="300" lineHeight="1.6">
              {item.description}
            </Typography>
          </Box>
          <Box
            sx={{ display: "flex", alignItems: "center", flex: "0.5", justifyContent: "center" }}
          >
            <IconButton aria-label="remove">
              <RemoveRoundedIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" fontWeight="300" lineHeight="1.6">
              1
            </Typography>
            <IconButton aria-label="add">
              <AddRoundedIcon />
            </IconButton>
          </Box>
          <Box sx={{ flex: "0.5", display: "flex", justifyContent: "center" }}>
            <Typography variant="body1" color="inherit" fontWeight="300" lineHeight="1.6">
              250 บาท
            </Typography>
          </Box>
          <IconButton aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </Box>
      </Paper>
    );
  });

  return (
    <Grid
      item
      xs={8}
      sx={{ display: "flex", flexDirection: "column", gap: "20px", height: "100%" }}
    >
      <Paper>
        <Typography
          component="h4"
          variant="h4"
          color="inherit"
          gutterBottom
          alignContent="start"
          padding="20px"
        >
          สินค้าในตะกร้า
        </Typography>
      </Paper>
      {itemsList}
    </Grid>
  );
};

export default CartItemsList;
