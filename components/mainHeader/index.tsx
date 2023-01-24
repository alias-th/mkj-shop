import { FC } from "react";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Image from "next/image";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import SearchBar from "./SearchBar";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";

const pages = ["หน้าแรก", "ร้านค้า", "เกี่ยวกับเรา", "ติดต่อเรา"];
const settings = ["โปรไฟล์", "คำสั่งซื้อ", "สิ่งที่อยากได้", "ออกจากระบบ"];

interface Props {}

const Header: FC<Props> = (props): JSX.Element => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const theme = useTheme();
  const downMd = useMediaQuery(theme.breakpoints.down("md"));
  const downSm = useMediaQuery(theme.breakpoints.down("sm"));
  const upMd = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <AppBar position="static" color="secondary" sx={{ height: "72px" }}>
      <Container maxWidth="xl" sx={{ height: "100%" }}>
        <Toolbar
          disableGutters
          sx={{ height: "100%", gap: "2rem", justifyContent: "space-between" }}
        >
          {/* LOGO -> Display When : Media query down md */}
          {upMd && <Image src="/logo.png" alt="logo" width={100} height={70} priority />}

          {/* HAMBURGER */}
          <Box sx={{ flexGrow: downMd ? 0 : 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="primary"
            >
              <MenuIcon color="primary" />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                color: "primary",
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu} color="primary">
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* LOGO -> Display When : Media query down md */}
          {downMd && !downSm && (
            <Box sx={{ flex: 1, justifyContent: "center", alignItems: "center", display: "flex" }}>
              <Image src="/logo.png" alt="logo" width={100} height={70} />
            </Box>
          )}

          {/* MENU BUTTON */}
          <Box sx={{ flex: 0.5, gap: "10px", display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "black",
                  display: "block",
                  fontSize: "1.6rem",
                }}
              >
                {page}
              </Button>
            ))}
          </Box>

          {/* SEARCH */}
          <SearchBar />

          {/* CONTAINER MENU END */}
          <Box
            sx={{
              flex: "0.3",
              display: "flex",
              alignItems: "center",
              justifyContent: "end",
              gap: "20px",
            }}
          >
            {/* CART AND FAV*/}
            {!downSm && (
              <Tooltip title="ตะกร้า">
                <IconButton aria-label="cart">
                  <Badge badgeContent={4} color="info">
                    <ShoppingCartIcon color="primary" sx={{ width: "30px", height: "30px" }} />
                  </Badge>
                </IconButton>
              </Tooltip>
            )}

            {!downSm && (
              <Tooltip title="สิ่งที่อยากได้">
                <IconButton aria-label="favorite">
                  <Badge badgeContent={4} color="info">
                    <FavoriteIcon color="primary" sx={{ width: "30px", height: "30px" }} />
                  </Badge>
                </IconButton>
              </Tooltip>
            )}

            {/* ACCOUNT AND MENU */}
            <Tooltip title="โปรไฟล์">
              <IconButton onClick={handleOpenUserMenu}>
                <Avatar alt="Remy Sharp" sx={{ width: "30px", height: "30px", bgcolor: "black" }} />
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
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu} sx={{ color: "primary" }}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
