import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Typography } from "@mui/material";

const TAX_RATE = 0.07;

function ccyFormat(num: number) {
  return `${num.toFixed(2)}`;
}

function priceRow(qty: number, unit: number) {
  return qty * unit;
}

function createRow(desc: string, qty: number, unit: number) {
  const price = priceRow(qty, unit);
  return { desc, qty, unit, price };
}

interface Row {
  desc: string;
  qty: number;
  unit: number;
  price: number;
}

function subtotal(items: readonly Row[]) {
  return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
}

const rows = [
  createRow("Paperclips (Box)", 100, 1.15),
  createRow("Paper (Case)", 10, 45.99),
  createRow("Waste Basket", 2, 17.99),
];

const invoiceSubtotal = subtotal(rows);
const invoiceTaxes = TAX_RATE * invoiceSubtotal;
const invoiceTotal = invoiceTaxes + invoiceSubtotal;

export default function CartItemsTotal() {
  return (
    <Paper sx={{ display: "flex", padding: "20px", flexDirection: "column", gap: "20px" }}>
      <Box>
        <Typography component="h4" variant="h6" color="inherit" gutterBottom alignContent="start">
          สรุปคำสั่งซื้อ
        </Typography>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
          <Typography variant="body1" color="inherit" fontWeight="300" lineHeight="1.6">
            กรวย
          </Typography>
          <Typography variant="body1" color="inherit" fontWeight="300" lineHeight="1.6">
            250 บาท
          </Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
          <Typography variant="body1" color="inherit" fontWeight="300" lineHeight="1.6">
            กรวย
          </Typography>
          <Typography variant="body1" color="inherit" fontWeight="300" lineHeight="1.6">
            250 บาท
          </Typography>
        </Box>
      </Box>
      <Box>
        <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
          <Typography variant="body1" color="inherit" fontWeight="300" lineHeight="1.6">
            ยอดรวม
          </Typography>
          <Typography variant="body1" color="inherit" fontWeight="300" lineHeight="1.6">
            500 บาท
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
}
