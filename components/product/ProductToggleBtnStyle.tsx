import { ChangeEventHandler, FC, MouseEvent, MouseEventHandler, useState } from "react";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";

interface Props {
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

const ProductToggleBtnStyle: FC<Props> = ({ subProducts }): JSX.Element => {
  const [alignment, setAlignment] = useState(subProducts[0].series);
  //   const handleChange = (e: MouseEvent<HTMLElement, globalThis.MouseEvent>) => {
  //     const clickedElement = e.target as HTMLButtonElement;
  //   };

  const handleChange = (event: React.MouseEvent<HTMLElement>, newAlignment: string) => {
    setAlignment(newAlignment);
  };
  return (
    <ToggleButtonGroup
      color="primary"
      value={alignment}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
    >
      {subProducts.map((item, i) => {
        return (
          <ToggleButton key={i} value={item.series!}>
            {item.series!}
          </ToggleButton>
        );
      })}
      {/* <ToggleButton value="AW">AW</ToggleButton> */}
      {/* <ToggleButton value="android">Android</ToggleButton>
      <ToggleButton value="ios">iOS</ToggleButton> */}
    </ToggleButtonGroup>
  );
};

export default ProductToggleBtnStyle;
