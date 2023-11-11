import {
  Box,
  IconButton,
  Menu,
  Drawer,
} from "@mui/material";
import { useState } from "react";
import { pages, Roules, isUser } from "../assets/nav.assets";
import MenuIcon from "@mui/icons-material/Menu";
import PropupItem from "./PropupItem";

const SsMenu = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const publicRoute = pages.filter((e) => e.roule === Roules.public);
  return (
    <Box>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleDrawerOpen}
        color="inherit"
      >
        <MenuIcon />
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
          display: { xs: "block", md: "none" },
        }}
        onClick={handleDrawerClose}
      >
        <Drawer
          open={open}
          anchor="top"
          sx={{}}
          // variant="persistent"
        >
          <Box
            style={{
              background: "#192734",
              color: "white",
              fontWeight: "bold",
            }}
          >
            {isUser ? (
              <PropupItem pages={pages} />
            ) : (
              <PropupItem pages={publicRoute} />
            )}
          </Box>
        </Drawer>
      </Menu>
    </Box>
  );
};

export default SsMenu;
