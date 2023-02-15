import { Box, Button, IconButton, Typography } from "@mui/material";
import { FC } from "react";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import AddShoppingCartRoundedIcon from "@mui/icons-material/AddShoppingCartRounded";
import { ResponseProduct } from "@/pages/product/[slug]";
import ProductToggleBtnStyle from "./ProductToggleBtnStyle";
import ProductToggleBtnSizes from "./ProductToggleBtnSizes";

interface Props extends ResponseProduct {}

const ProductDetails: FC<Props> = ({ product }): JSX.Element => {
  const { description, name, price, subProducts, slug } = product;
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <Typography component="h4" variant="h4" color="inherit" gutterBottom alignContent="start">
        {name}
      </Typography>
      <Typography variant="body1" color="inherit" fontWeight="300" lineHeight="1.6">
        {description}
      </Typography>
      <Box sx={{ display: "flex", alignItems: "self-start", gap: "5px", flexDirection: "column" }}>
        <Typography variant="body1" color="inherit" fontWeight="300" lineHeight="1.6">
          ซีรีย์
        </Typography>
        <ProductToggleBtnStyle subProducts={subProducts} />
      </Box>
      <Box sx={{ display: "flex", alignItems: "self-start", gap: "5px", flexDirection: "column" }}>
        <Typography variant="body1" color="inherit" fontWeight="300" lineHeight="1.6">
          ขนาด
        </Typography>
        <ProductToggleBtnSizes subProducts={subProducts} slug={slug} />
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
        <Typography variant="body1" color="inherit" fontWeight="300" lineHeight="1.6">
          สิ้นค้าเหลือจำนวน {price?.qty} ชิ้น
        </Typography>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
        <Typography variant="h5" color="inherit" fontWeight="300" lineHeight="1.6">
          ราคา {price?.price} บาท
        </Typography>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
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
      <Box sx={{ display: "flex", gap: "20px" }}>
        <Button variant="contained" color="info">
          <AddShoppingCartRoundedIcon />
          เพิ่มไปยังตะกร้า
        </Button>
        <Button variant="contained" color="success">
          <FavoriteRoundedIcon />
          เพิ่มไปยังสินค้าที่อยากได้
        </Button>
      </Box>
    </Box>
  );
};

export default ProductDetails;
