import { FC } from "react";
import { TextField, Box, Button, Typography } from "@mui/material";

interface Props {}

const loginForm: FC<Props> = (props): JSX.Element => {
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
        เข้าสู่ระบบ
      </Typography>
      <TextField id="outlined-name" label="อีเมล" fullWidth />
      <TextField id="outlined-name" label="รหัสผ่าน" fullWidth />
      <Button variant="contained" color="info" fullWidth>
        เข้าสู่ระบบ
      </Button>
      <Typography component="p" variant="body2" color="inherit" gutterBottom alignContent="end">
        ลืมรหัสผ่าน ?
      </Typography>
      <Button variant="outlined" fullWidth>
        Google
      </Button>
      <Button variant="outlined" fullWidth>
        Facebook
      </Button>
      <Button variant="outlined" fullWidth>
        Github
      </Button>
    </Box>
  );
};

export default loginForm;
