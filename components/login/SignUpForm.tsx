import { FC } from "react";
import { TextField, Box, Button, Typography } from "@mui/material";
interface Props {}

const SignUpForm: FC<Props> = (props): JSX.Element => {
  return (
    <Box
      component="form"
      sx={{
        width: "300px",
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
      <TextField id="outlined-name" label="ชื่อ-นามสกุล" fullWidth />
      <TextField id="outlined-name" label="อีเมล" fullWidth />
      <TextField id="outlined-name" label="รหัสผ่าน" fullWidth />
      <TextField id="outlined-name" label="ยืนยันรหัสผ่าน" fullWidth />
      <Button variant="contained" color="info" fullWidth>
        สมัครสมาขิก
      </Button>
    </Box>
  );
};

export default SignUpForm;
