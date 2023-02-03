import HomeFooter from "@/components/home/homeFooter";
import Header from "@/components/home/homeHeader";
import { Container } from "@mui/material";
import { FC } from "react";
import LoginAndSignUp from "../components/login";
import { Grid, IconButton } from "@mui/material";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import { GetServerSideProps, InferGetServerSidePropsType, Redirect } from "next";
import { getSession, getProviders, ClientSafeProvider } from "next-auth/react";

type Props = InferGetServerSidePropsType<typeof getServerSideProps>;

const Login: FC<Props> = ({ providers }): JSX.Element => {
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
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: { xs: "50px", md: "100px" },
              flexDirection: { xs: "column", md: "row" },
            }}
          >
            <LoginAndSignUp providers={providers} />
          </Grid>
        </Grid>
      </Container>
      <HomeFooter />
    </>
  );
};
interface ServerSideResponse {
  providers?: ClientSafeProvider[];
  redirect?: Redirect;
}

export const getServerSideProps: GetServerSideProps<ServerSideResponse> = async (context) => {
  const { req } = context;
  const session = await getSession({ req });

  if (session) {
    return {
      props: {},
      redirect: {
        destination: "/",
      },
    };
  }

  const myProvider = await getProviders();
  // todo: redirect to error page
  if (!myProvider) {
    console.log("myProvider is not found!");
    return {
      props: {},
      redirect: {
        destination: "/",
      },
    };
  }

  const providers = Object.values(myProvider);

  return {
    props: {
      providers,
    },
  };
};
export default Login;
