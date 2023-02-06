import { FC, useState, ChangeEventHandler } from "react";
import { TextField, Box, Button, Typography } from "@mui/material";
import { useField, Form, FormikProps, Formik } from "formik";
import SignupInput from "../../components/inputs/signupInput";
import { signupValidation } from "@/utils/validator/login";
import axios from "axios";

interface Props {}

interface Values {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const SignUpForm: FC<Props> = (props): JSX.Element => {
  const [infoUser, setInfoUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const onChangeHandler: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement> = (e) => {
    const { name, value } = e.target;
    setInfoUser({ ...infoUser, [name]: value });
  };

  const onSubmitHandler = async () => {
    console.log(infoUser);

    try {
      await axios.post("/api/auth/signup", {
        name: infoUser.name,
        email: infoUser.email,
        password: infoUser.password,
        confirmPassword: infoUser.confirmPassword,
      });
    } catch (error: any) {
      console.log(error.message);
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
          name: infoUser.name,
          email: infoUser.email,
          password: infoUser.password,
          confirmPassword: infoUser.confirmPassword,
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
            <SignupInput name="name" type="text" label="ชื่อ-นามสกุล" onChange={onChangeHandler} />
            <SignupInput name="email" type="text" label="อีเมล" onChange={onChangeHandler} />
            <SignupInput
              name="password"
              type="password"
              label="รหัสผ่าน"
              onChange={onChangeHandler}
            />
            <SignupInput
              name="confirmPassword"
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
