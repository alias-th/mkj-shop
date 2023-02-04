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
import Link from "next/link";
import { pages } from "../../../data/header";
import AccountInfo from "./AccountInfo";
import { Session } from "next-auth";

interface Props {
  mySession: Session;
}

const Header: FC<Props> = ({ mySession }): JSX.Element => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const theme = useTheme();
  const downMd = useMediaQuery(theme.breakpoints.down("md"));
  const downSm = useMediaQuery(theme.breakpoints.down("sm"));
  const upMd = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <AppBar position="relative" color="secondary" sx={{ minWidth: "250px" }}>
      <Container maxWidth="xl" sx={{ height: "100%" }}>
        <Toolbar
          disableGutters
          sx={{ height: "100%", gap: "2rem", justifyContent: "space-between" }}
        >
          {/* LOGO -> Display When : Media query up md */}
          {/* แสดงตอน upMd */}
          {upMd && (
            <Link href="/">
              <Image src="/logo.png" alt="logo" width={100} height={70} priority />
            </Link>
          )}

          {/* HAMBURGER */}
          {/* แสดงตอน xs */}
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
              {pages.map((page, i) => {
                // console.log(page);
                return (
                  <MenuItem key={i} onClick={handleCloseNavMenu} color="primary">
                    <Link href={page.href}>
                      <Typography textAlign="center">{page.title}</Typography>
                    </Link>
                  </MenuItem>
                );
              })}
            </Menu>
          </Box>

          {/* LOGO -> Display When : Media query down md */}
          {/* โลโก้ตรงกลาง */}
          {downMd && !downSm && (
            <Box sx={{ flex: 1, justifyContent: "center", alignItems: "center", display: "flex" }}>
              <Link href="/">
                <Image src="/logo.png" alt="logo" width={100} height={70} />
              </Link>
            </Box>
          )}

          {/* MENU BUTTON */}
          {/* เมนูแต่ละ page */}
          <Box sx={{ flex: 0.5, gap: "10px", display: { xs: "none", md: "flex" } }}>
            {pages.map((page, i) => (
              <Link href={page.href} key={i}>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: "black",
                    display: "block",
                    fontSize: "1.6rem",
                  }}
                >
                  {page.title}
                </Button>
              </Link>
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
              <Link href="/cart">
                <Tooltip title="ตะกร้า">
                  <IconButton aria-label="cart">
                    <Badge badgeContent={4} color="info">
                      <ShoppingCartIcon
                        sx={{ width: "30px", height: "30px", color: "#9d9d9dab" }}
                      />
                    </Badge>
                  </IconButton>
                </Tooltip>
              </Link>
            )}

            {!downSm && (
              <Tooltip title="สิ่งที่อยากได้">
                <IconButton aria-label="favorite">
                  <Badge badgeContent={4} color="info">
                    <FavoriteIcon sx={{ width: "30px", height: "30px", color: "#9d9d9dab" }} />
                  </Badge>
                </IconButton>
              </Tooltip>
            )}

            {/* ACCOUNT AND MENU */}

            {mySession && (
              <AccountInfo
                handleOpenUserMenu={handleOpenUserMenu}
                anchorElUser={anchorElUser}
                handleCloseUserMenu={handleCloseUserMenu}
                mySession={mySession}
              />
            )}

            {!mySession && (
              <Link href="/login">
                <Box sx={{ display: "flex", gap: "10px" }}>
                  <Button variant="contained" color={"info"}>
                    Signup
                  </Button>
                  <Button variant="outlined" color={"info"}>
                    Login
                  </Button>
                </Box>
              </Link>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
