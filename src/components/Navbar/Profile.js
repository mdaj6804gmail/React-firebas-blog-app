import {
  Avatar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { settings } from "../assets/nav.assets";
import ProfilImag from "../assets/image/Profile_image.png";
import { NavLink } from "react-router-dom";

const Profile = () => {
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title="Open settings">
        <IconButton
          onClick={handleOpenUserMenu}
          sx={{ p: 0 }}
          style={{ border: "2px solid #F1EAFF" }}
        >
          <Avatar alt="Avatar" src={ProfilImag} />
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
        <Box>
          {settings.map((setting) => (
            <NavLink to={setting.link} key={setting.title}>
              <MenuItem key={setting.title} onClick={handleCloseUserMenu}>
                <Typography
                  variant="h6"
                  textAlign="center"
                  sx={{ fontWeight: "bold" }}
                >
                  {setting.title}
                </Typography>
              </MenuItem>
            </NavLink>
          ))}
        </Box>
      </Menu>
    </Box>
  );
};

export default Profile;
