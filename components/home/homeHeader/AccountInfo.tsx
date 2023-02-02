import { Avatar, IconButton, Menu, MenuItem, Tooltip, Typography } from "@mui/material";
import { FC, MouseEvent } from "react";

interface Props {
  handleOpenUserMenu: (event: React.MouseEvent<HTMLElement>) => void;
  anchorElUser: HTMLElement | null;
  handleCloseUserMenu: (event: React.MouseEvent<HTMLElement>) => void;
}

const settings = ["โปรไฟล์", "คำสั่งซื้อ", "สิ่งที่อยากได้", "ออกจากระบบ"];

const AccountInfo: FC<Props> = ({
  handleCloseUserMenu,
  handleOpenUserMenu,
  anchorElUser,
}): JSX.Element => {
  return (
    <>
      <Tooltip title="โปรไฟล์">
        <IconButton onClick={handleOpenUserMenu}>
          <Avatar alt="Remy Sharp" sx={{ width: "30px", height: "30px", bgcolor: "#9d9d9dab" }} />
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
        {settings.map((setting, i) => (
          <MenuItem key={i} onClick={handleCloseUserMenu} sx={{ color: "primary" }}>
            <Typography textAlign="center">{setting}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default AccountInfo;
