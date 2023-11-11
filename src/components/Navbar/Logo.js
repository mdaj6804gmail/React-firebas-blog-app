import { Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

const Logo = ({ display }) => {
  return (
    <NavLink to={"/"}>
      <Typography
        variant="h5"
        noWrap
        component="h3"
        sx={{
          mr: 2,
          display: { ...display },
          flexGrow: 1,
          fontFamily: "monospace",
          fontWeight: 700,
          letterSpacing: ".3rem",
          color: "inherit",
          textDecoration: "none",
        }}
      >
        Mubin
      </Typography>
    </NavLink>
  );
};

export default Logo;
