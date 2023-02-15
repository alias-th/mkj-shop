import { ToggleButtonGroup, ToggleButton } from "@mui/material/";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC, useState } from "react";

interface Props {
  slug: string;
  subProducts: {
    series?: string;
    color?: {};
    description_images: [];
    sold: number;
    sku: string;
    images: {
      url: string;
      public_url: string;
    }[];
    sizes: {
      size: string;
      qty: number;
      price: number;
      _id: string;
    }[];
    discount: number;
  }[];
}

const ProductToggleBtnSizes: FC<Props> = ({ subProducts, slug }): JSX.Element => {
  const [alignment, setAlignment] = useState("");

  const router = useRouter();

  const handleChange = (event: React.MouseEvent<HTMLElement>, newAlignment: string) => {
    setAlignment(newAlignment);
  };
  return (
    <ToggleButtonGroup
      color="primary"
      value={alignment}
      exclusive
      onChange={handleChange}
      aria-label="Sizes"
    >
      {subProducts.map((item, i) => {
        return item.sizes.map((sizeItem, i) => {
          return (
            <ToggleButton
              value={sizeItem.size}
              key={i}
              disabled={sizeItem.size === alignment}
              onClick={() =>
                router.push(`/product/${slug}/?style=${router.query.style}&size=${i}`, undefined, {
                  scroll: false,
                })
              }
            >
              {sizeItem.size}
            </ToggleButton>
          );
        });
      })}
    </ToggleButtonGroup>
  );
};

export default ProductToggleBtnSizes;
