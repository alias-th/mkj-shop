import { FC } from "react";
import { Grid, Typography, Button, Paper } from "@mui/material";
import CartItemsList from "./CartItemsList";
import CartItemsTotal from "./CartItemsTotal";

interface Props {}

const Cart: FC<Props> = (props): JSX.Element => {
  return (
    <Grid container spacing={2}>
      <CartItemsList />

      <Grid item xs={4} sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <CartItemsTotal />
        <Button variant="contained" color="info">
          ดำเนินการชำระเงิน
        </Button>
      </Grid>

      <Grid item xs={12}></Grid>
    </Grid>
  );
};

export default Cart;
