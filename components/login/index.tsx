import { FC } from "react";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import { ClientSafeProvider } from "next-auth/react";
import Box from "@mui/material/Box";

interface Props {
  providers: ClientSafeProvider[] | undefined;
}

const LoginAndSignUp: FC<Props> = ({ providers }): JSX.Element => {
  return (
    <>
      <LoginForm providers={providers} />
      <Box
        sx={{
          height: { xs: "1px", md: "100%" },
          width: { xs: "100%", md: "1px" },
          backgroundColor: " rgba(0, 0, 0, 0.223)",
        }}
      ></Box>
      <SignUpForm />
    </>
  );
};

export default LoginAndSignUp;
