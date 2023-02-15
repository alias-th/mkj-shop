import { FC, useState } from "react";
import { Box } from "@mui/material";
import Image from "next/image";
import { products } from "@/data/product";
import ReactImageMagnify from "react-image-magnify";
import styles from "./styles.module.css";
import { ResponseProduct } from "@/pages/product/[slug]";

interface Props extends ResponseProduct {}

const ProductImagesSwiperList: FC<Props> = ({ product }): JSX.Element => {
  // console.log(product);
  const { images, slug } = product;
  const [active, setActive] = useState(0);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        width: "100%",
        height: "100%",
        position: "relative",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
      }}
    >
      <div className={styles.image}>
        {images && (
          <ReactImageMagnify
            {...{
              smallImage: {
                alt: "",
                src: images[active].url,
                isFluidWidth: true,
              },
              largeImage: {
                src: images[active].url,
                width: 2000,
                height: 2000,
              },
              enlargedImageContainerDimensions: {
                width: "150%",
                height: "100%",
              },
              imageStyle: {
                objectFit: "contain",
                maxHeight: "450px",
              },
            }}
          />
        )}
      </div>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "row", md: "column" },
          gap: "5px",
          width: "min-content",
          justifyContent: "center",
        }}
      >
        {images?.map((image, i) => {
          return (
            <Box
              onMouseOver={() => setActive(i)}
              sx={{
                borderStyle: `${active === i ? "groove" : "none"}`,
                width: "100%",
                position: "relative",
              }}
              key={i}
            >
              <Image
                className={styles.imageList}
                src={image.url}
                alt={`${slug}-image-${i}`}
                fill
                sizes="(max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            33vw"
              />
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default ProductImagesSwiperList;
