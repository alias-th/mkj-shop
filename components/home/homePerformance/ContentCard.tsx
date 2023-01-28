import * as React from "react";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function ContentCard() {
  return (
    <Card sx={{ height: "100%", padding: "15px" }}>
      <CardContent sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Typography component="h4" variant="h4" color="inherit" gutterBottom alignContent="start">
          บริษัท เอ็ม เค เจ พรีซิสชั่น จำกัด
        </Typography>
        <Typography variant="h6" color="inherit" fontWeight="300" lineHeight="1.6">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus sed consequuntur
          perspiciatis nulla fuga ipsum non dolore deserunt, ipsa itaque? Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Quidem hic sint quas placeat illum eum, voluptate fuga
          odit! Natus rerum sequi impedit ex amet magnam. Laboriosam amet tenetur totam consequatur.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non laborum illum tempore. Illo
          harum quibusdam aperiam excepturi molestias quae consequuntur itaque officiis eaque eius
          rem accusantium praesentium neque, facilis repudiandae?
        </Typography>
      </CardContent>
    </Card>
  );
}
