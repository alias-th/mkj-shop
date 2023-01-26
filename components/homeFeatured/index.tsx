import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import Link from "next/link";
import { FC } from "react";
import ImageSlide from "./ImageSlide";
import useMediaQuery from "@mui/material/useMediaQuery";

interface Props {}

const HomeFeatured: FC<Props> = (props): JSX.Element => {
  // control display Swiper
  const matches900 = useMediaQuery("(max-width:900px)");
  // control font-size
  const matches500 = useMediaQuery("(max-width:500px)");
  return (
    <Paper
      sx={{
        height: "500px",
        position: "relative",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: `url(/images/bgFeatured.png)`,
      }}
    >
      {/* Increase the priority of the hero background image */}
      {
        <img
          style={{ display: "none" }}
          src="/images/bgFeatured.png"
          alt="background main featured"
        />
      }
      <Grid container height="100%">
        <Grid item md={6} mds={12}>
          <Box
            sx={{
              position: "relative",
              p: { xs: 5 },
              pr: { md: 0 },
              height: "100%",
              display: "flex",
              alignItems: "start",
              flexDirection: "column",
              justifyContent: "center",
              gap: { lgs: "30px" },
              color: "white",
            }}
          >
            <Typography
              component="h1"
              variant="h3"
              color="inherit"
              gutterBottom
              fontSize={matches500 ? "3rem" : undefined}
            >
              บริษัท เอ็ม เค เจ พรีซิสชั่น จำกัด
            </Typography>
            <Typography
              variant="h5"
              color="inherit"
              paragraph
              lineHeight="1.6"
              fontSize={matches500 ? "inherit" : undefined}
            >
              เป็นตัวแทนจำหน่ายสินค้าอุตสาหกรรมทุกประเภทเพื่อรองรับความต้องการ ของลูกค้า
              เราพร้อมที่จะให้คำปรึกษา และนำเสนอสินค้าที่ลูกค้าต้องการโดย
              มุ่งเน้นการนำเสนอสินค้าที่มีคุณภาพจากผู้ผลิตบริษัทชั้นนำต่างๆทั้งใน ประเทศ
              และต่างประเทศ
            </Typography>
            <Link href="/">
              <Button
                variant="contained"
                color="info"
                sx={{
                  fontSize: matches500 ? "1rem" : undefined,
                }}
              >
                ดูสินค้าของเรา
              </Button>
            </Link>
          </Box>
        </Grid>
        <Grid
          item
          md={6}
          sx={{
            display: `${matches900 && "none"}`,
          }}
        >
          <Box
            sx={{
              p: { xs: 5 },
              display: "flex",
              height: "100%",
              justifyContent: "end",
            }}
          >
            <ImageSlide />
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default HomeFeatured;
