import { Box, Button, IconButton, Typography } from "@mui/material";
import { FC } from "react";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import AddShoppingCartRoundedIcon from "@mui/icons-material/AddShoppingCartRounded";

interface Props {}

const ProductDetails: FC<Props> = (props): JSX.Element => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <Typography component="h4" variant="h4" color="inherit" gutterBottom alignContent="start">
        บริษัท เอ็ม เค เจ พรีซิสชั่น จำกัด
      </Typography>
      <Typography variant="h6" color="inherit" fontWeight="300" lineHeight="1.6">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus sed consequuntur
        perspiciatis nulla fuga ipsum non dolore deserunt, ipsa itaque? Lorem ipsum dolor sit amet
        consectetur, adipisicing elit. Quidem hic sint quas placeat illum eum, voluptate fuga odit!
        Natus rerum sequi impedit ex amet magnam.
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
        <Typography variant="h6" color="inherit" fontWeight="300" lineHeight="1.6">
          สิ้นค้าเหลือจำนวน 10 ชิ้น
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
