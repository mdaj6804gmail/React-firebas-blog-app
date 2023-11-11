import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Profile from "./Profile";
import NavMenu from "./NavMenu";
import Logo from "./Logo";
import SsMenu from "./SsMenu";

function Navbar() {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#ab47bc" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Logo display={{ xs: "none", md: "flex" }} />
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <SsMenu />
          </Box>
          <Logo display={{ xs: "flex", md: "none" }} />

          {/* Menu */}
          <Box sx={{ flexGrow: 1 }}>
            <NavMenu />
          </Box>

          {/* Profile */}
          <Profile />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
