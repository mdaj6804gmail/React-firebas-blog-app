import { Box } from "@mui/material";
import { Roules, pages, isUser } from "../assets/nav.assets";

import NavItem from "./NavItem";

const NavMenu = () => {
  const publicRoute = pages.filter((roule) => roule.roule === Roules.public);
  return (
    <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
      {isUser ? <NavItem pages={pages} /> : <NavItem pages={publicRoute} />}
    </Box>
  );
};

export default NavMenu;
