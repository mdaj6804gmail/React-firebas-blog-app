/* eslint-disable no-unused-vars */
import { MenuItem, Typography } from "@mui/material";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const PropupItem = ({ pages }) => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return pages.map((page) => (
    <NavLink
      className={"Link_huver"}
      key={page.title}
      to={page.link}
      style={{ margin: "5px 0" }}
    >
      <MenuItem key={page.title} onClick={handleCloseNavMenu}>
        <Typography textAlign="center">{page.title}</Typography>
      </MenuItem>
    </NavLink>
  ));
};

export default PropupItem;
