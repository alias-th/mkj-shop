import { Box, Typography } from "@mui/material";
import { FC } from "react";
import { products } from "@/data/product";
import Image from "next/image";
import useMediaQuery from "@mui/material/useMediaQuery";
import styles from "./styles.module.css";
interface Props {}

const ProductOther: FC<Props> = (props): JSX.Element => {
  const matches1104 = useMediaQuery("(max-width:1104px)");
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <Typography component="h4" variant="h4" color="inherit" gutterBottom alignContent="start">
        สินค้าอื่น
      </Typography>
      <Box
        sx={{
          display: "flex",
          gap: "20px",
          width: "100%",
          flexWrap: "wrap",
          justifyContent: "center",
          position: "relative",
        }}
      >
        {products.map((item, i) => {
          return (
            <Image
              className={styles.imageOther}
              src={item.image}
              key={i}
              alt={item.title}
              fill
              sizes="(max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            33vw"
            />
          );
        })}
      </Box>
    </Box>
  );
};

export default ProductOther;
