import HomeFooter from "@/components/home/homeFooter";
import Header from "@/components/home/homeHeader";
import { Container } from "@mui/material";
import { FC } from "react";
import LoginAndSignUp from "../components/login";
import { Grid, IconButton } from "@mui/material";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
interface Props {}

const Login: FC<Props> = (props): JSX.Element => {
  return (
    <>
      <Header />
      <Container
        maxWidth={"xl"}
        sx={{
          minWidth: "250px",
          height: "100%",
          backgroundColor: "white",
          padding: "20px",
          marginTop: "20px",
        }}
      >
        <Grid container>
          <Grid item xs={12}>
            <IconButton aria-label="delete" size="large">
              <ArrowBackIosNewRoundedIcon />
            </IconButton>
            กลับไปยังร้านค้า
          </Grid>
          <Grid
            item
            xs={12}
            sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "100px" }}
          >
            <LoginAndSignUp />
          </Grid>
        </Grid>
      </Container>
      <HomeFooter />
    </>
  );
};

export default Login;
