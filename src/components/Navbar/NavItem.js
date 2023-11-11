import { Button } from "@mui/material";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const NavItem = ({ pages }) => {
  // eslint-disable-next-line no-unused-vars
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
    console.log("handleCloseNavMenu");
  };

  return pages.map((page) => (
    <NavLink to={page.link} onClick={handleCloseNavMenu} key={page.title}>
      <Button key={page} sx={{ my: 2, color: "white", display: "block" }}>
        {page.title}
      </Button>
    </NavLink>
  ));
};

export default NavItem;
