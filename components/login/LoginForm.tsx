import { FC } from "react";
import { TextField, Box, Button, Typography } from "@mui/material";
import { ClientSafeProvider, signIn } from "next-auth/react";

interface Props {
  providers: ClientSafeProvider[] | undefined;
}

const loginForm: FC<Props> = ({ providers }): JSX.Element => {
  return (
    <Box
      component="form"
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
      <TextField id="outlined-name" label="อีเมล" fullWidth />
      <TextField id="outlined-name" label="รหัสผ่าน" fullWidth />
      <Button variant="contained" color="info" fullWidth>
        เข้าสู่ระบบ
      </Button>
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

export default loginForm;
