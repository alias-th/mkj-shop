import { Box, Typography, Grid, CardMedia, Paper } from "@mui/material";
import Image from "next/image";
import { FC } from "react";

interface Props {}

const HomeFooter: FC<Props> = (props): JSX.Element => {
  return (
    <Box
      sx={{
        marginTop: "50px",
        padding: "20px  0px  0px 0px",
        width: "100%",
        minWidth: "250px",
        height: "100%",
      }}
      component="footer"
    >
      <Paper elevation={3}>
        <Grid
          container
          alignContent="center"
          gap="20px"
          padding="20px"
          flexDirection={{ xs: "column", md: "row" }}
          width="100%"
          minHeight="300px"
          justifyContent="center"
        >
          <Grid
            item
            md={3}
            display={{ xs: "none", md: "flex" }}
            alignItems="center"
            flexDirection="column"
          >
            <Image src="/logo.png" alt="logo" width={195} height={147}></Image>
          </Grid>
          <Grid item xs={12} md={3} display="flex" alignItems="center" flexDirection="column">
            <Typography component="h6" variant="h5" color="inherit" gutterBottom>
              บริษัท เอ็ม เค เจ พรีซิสชั่น จำกัด
            </Typography>
            <Typography variant="h6" color="inherit" fontWeight="300" lineHeight="1.6">
              93/312 <br></br>หมู่ 3 ถนนพระรามที่ 2 ตำบลนาดี <br></br> อำเภอเมืองสมุทรสาคร
              จังหวัดสมุทรสาคร 74000
            </Typography>
          </Grid>
          <Grid item xs={12} md={2} display="flex" alignItems="center" flexDirection="column">
            <Typography component="h6" variant="h5" color="inherit" gutterBottom>
              ติดต่อ
            </Typography>
            <Typography variant="h6" color="inherit" fontWeight="300" lineHeight="1.6">
              Tel : 034 433525 <br></br>Line : MKJ <br></br>E-Mail : mkj@mkj.com
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={3}
            display={{ xs: "none", md: "flex" }}
            alignItems="center"
            flexDirection="column"
          >
            <CardMedia
              component="iframe"
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fmkjprecision%2F&tabs&width=250&height=130&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=694867968804591"
              width="100%"
              height="100%"
              scrolling="no"
              frameBorder="0"
              allowFullScreen={true}
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            ></CardMedia>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default HomeFooter;
