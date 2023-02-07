import { ChangeEventHandler, FC, useState } from "react";
import { Box, Button, Typography, Alert, IconButton } from "@mui/material";
import { ClientSafeProvider, signIn } from "next-auth/react";
import { Form, Formik, FormikProps } from "formik";
import LoginAndSignupInput from "../inputs/loginAndSignupInput";
import { loginValidation } from "@/utils/validator/login";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import CloseIcon from "@mui/icons-material/Close";
import Collapse from "@mui/material/Collapse";

interface Props {
  providers: ClientSafeProvider[] | undefined;
}

interface Values {
  emailLogin: string;
  passwordLogin: string;
}

const LoginForm: FC<Props> = ({ providers }): JSX.Element => {
  const [infoUser, setInfoUser] = useState({
    emailLogin: "",
    passwordLogin: "",
  });
  const [open, setOpen] = useState(true);

  const router = useRouter();
  const { error } = useRouter().query;

  const onChangeHandler: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement> = (e) => {
    const { name, value } = e.target;
    setInfoUser({ ...infoUser, [name]: value });
  };

  const onSubmitHandler = async () => {
    // console.log(infoUser);
    const loadingLogin = toast.loading("กำลังดำเนินการ...");

    const options = {
      redirect: false,
      username: infoUser.emailLogin,
      password: infoUser.passwordLogin,
    };

    const res = await signIn("credentials", options);

    if (res?.error && !res.ok) {
      return toast.update(loadingLogin, {
        render: res.error,
        type: "error",
        isLoading: false,
        autoClose: 2500,
      });
    }

    toast.update(loadingLogin, {
      render: "เข้าสู่ระบบสำเร็จ",
      type: "success",
      isLoading: false,
      autoClose: 2500,
    });
    return router.push("/browse");
  };

  return (
    <Box
      sx={{
        width: "300px",
        maxWidth: "500px",
        display: "flex",
        // alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <Typography component="h4" variant="h4" color="inherit" gutterBottom alignContent="start">
        เข้าสู่ระบบ
      </Typography>
      <Formik
        enableReinitialize
        initialValues={{
          emailLogin: infoUser.emailLogin,
          passwordLogin: infoUser.passwordLogin,
        }}
        validationSchema={loginValidation}
        onSubmit={() => onSubmitHandler()}
      >
        {(props: FormikProps<Values>) => (
          <Form
            style={{
              display: "flex",
              gap: "20px",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <LoginAndSignupInput
              name="emailLogin"
              type="text"
              label="อีเมล"
              onChange={onChangeHandler}
            />
            <LoginAndSignupInput
              name="passwordLogin"
              type="password"
              label="รหัสผ่าน"
              onChange={onChangeHandler}
            />
            <Button variant="contained" color="info" fullWidth type="submit">
              เข้าสู่ระบบ
            </Button>
          </Form>
        )}
      </Formik>
      {error && (
        <Collapse in={open}>
          <Alert
            severity="error"
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setOpen(false);
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
          >
            อีเมลของคุณถูกใช้งานแล้ว, กรุณาเข้าสู่ระบบด้วยวิธีอื่น!
          </Alert>
        </Collapse>
      )}
      <Typography component="p" variant="body2" color="inherit" gutterBottom alignContent="end">
        ลืมรหัสผ่าน ?
      </Typography>

      {/* Login Social Buttons */}
      {providers?.map((provider, i) => {
        if (provider.name === "Credentials") return;
        return (
          <Button
            variant="outlined"
            fullWidth
            sx={{ display: "flex", gap: "10px" }}
            key={i}
            onClick={() => signIn(provider.id)}
          >
            <img
              src={`/icons/${provider.name}.png`}
              alt="google-icon"
              width={"25px"}
              height={"100%"}
            ></img>
            <Typography component="p" variant="body2" color="inherit" minWidth={"70px"}>
              {provider.name}
            </Typography>
          </Button>
        );
      })}
    </Box>
  );
};

export default LoginForm;
