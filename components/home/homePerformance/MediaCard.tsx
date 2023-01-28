import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";

export default function MediaCard() {
  const theme = useTheme();

  return (
    <Card sx={{ display: "flex", flexDirection: "column-reverse", height: "100%" }}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            เติมน้ำมันหล่อเย็น เข้าเครื่อง CNC
          </Typography>
        </CardContent>
      </Box>
      <CardMedia
        component="iframe"
        sx={{ height: "100%" }}
        src="https://www.youtube-nocookie.com/embed/QtTaI50qDJk"
        title="เติมน้ำมันหล่อเย็น เข้าเครื่อง CNC"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></CardMedia>
    </Card>
  );
}
