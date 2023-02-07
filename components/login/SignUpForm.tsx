import { FC, useState, ChangeEventHandler } from "react";
import { TextField, Box, Button, Typography } from "@mui/material";
import { useField, Form, FormikProps, Formik } from "formik";
import LoginAndSignupInput from "../inputs/loginAndSignupInput";
import { signupValidation } from "@/utils/validator/login";
import axios from "axios";

interface Props {}

interface Values {
  nameSignup: string;
  emailSignup: string;
  passwordSignup: string;
  confirmPasswordSignup: string;
}

const SignUpForm: FC<Props> = (props): JSX.Element => {
  const [infoUser, setInfoUser] = useState({
    nameSignup: "",
    emailSignup: "",
    passwordSignup: "",
    confirmPasswordSignup: "",
  });

  const onChangeHandler: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement> = (e) => {
    const { name, value } = e.target;
    setInfoUser({ ...infoUser, [name]: value });
  };

  const onSubmitHandler = async () => {
    // console.log(infoUser);

    try {
      const result = await axios.post("/api/auth/signup", {
        name: infoUser.nameSignup,
        email: infoUser.emailSignup,
        password: infoUser.passwordSignup,
        confirmPassword: infoUser.confirmPasswordSignup,
      });
      console.log(result.data.message);

      setInfoUser({
        nameSignup: "",
        emailSignup: "",
        passwordSignup: "",
        confirmPasswordSignup: "",
      });
    } catch (error: any) {
      console.log(error.response.data.message);
    }
  };

  return (
    <Box
      sx={{
        width: "400px",
        maxWidth: "500px",
        display: "flex",
        // alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <Typography component="h4" variant="h4" color="inherit" gutterBottom alignContent="start">
        สมัครสมาชิก
      </Typography>
      <Formik
        enableReinitialize
        initialValues={{
          nameSignup: infoUser.nameSignup,
          emailSignup: infoUser.emailSignup,
          passwordSignup: infoUser.passwordSignup,
          confirmPasswordSignup: infoUser.confirmPasswordSignup,
        }}
        validationSchema={signupValidation}
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
              name="nameSignup"
              type="text"
              label="ชื่อ-นามสกุล"
              onChange={onChangeHandler}
            />
            <LoginAndSignupInput
              name="emailSignup"
              type="text"
              label="อีเมล"
              onChange={onChangeHandler}
            />
            <LoginAndSignupInput
              name="passwordSignup"
              type="password"
              label="รหัสผ่าน"
              onChange={onChangeHandler}
            />
            <LoginAndSignupInput
              name="confirmPasswordSignup"
              type="password"
              label="ยืนยันรหัสผ่าน"
              onChange={onChangeHandler}
            />
            <Button variant="contained" color="info" fullWidth type="submit">
              สมัครสมาขิก
            </Button>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default SignUpForm;
