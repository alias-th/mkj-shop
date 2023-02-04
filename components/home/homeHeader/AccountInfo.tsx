import { Avatar, IconButton, Menu, MenuItem, Tooltip, Typography } from "@mui/material";
import { FC } from "react";
import { signOut } from "next-auth/react";
import { Session } from "next-auth";

interface Props {
  handleOpenUserMenu: (event: React.MouseEvent<HTMLElement>) => void;
  anchorElUser: HTMLElement | null;
  handleCloseUserMenu: (event: React.MouseEvent<HTMLElement>) => void;
  mySession: Session;
}

const settings = ["โปรไฟล์", "คำสั่งซื้อ", "สิ่งที่อยากได้", "ออกจากระบบ"];

const AccountInfo: FC<Props> = ({
  handleCloseUserMenu,
  handleOpenUserMenu,
  anchorElUser,
  mySession,
}): JSX.Element => {
  return (
    <>
      <Tooltip title="โปรไฟล์">
        <IconButton onClick={handleOpenUserMenu}>
          <Avatar
            alt="Remy Sharp"
            sx={{ width: "30px", height: "30px", bgcolor: "#9d9d9dab" }}
            src={mySession?.user?.image || ""}
          />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: "45px" }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {settings.map((setting, i) => {
          return (
            <MenuItem key={i} onClick={handleCloseUserMenu} sx={{ color: "primary" }}>
              {setting === "ออกจากระบบ" ? (
                <Typography textAlign="center" onClick={() => signOut()}>
                  {setting}
                </Typography>
              ) : (
                <Typography textAlign="center">{setting}</Typography>
              )}
            </MenuItem>
          );
        })}
      </Menu>
    </>
  );
};

export default AccountInfo;
