import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { isUser } from "../assets/nav.assets";

const Privateoutlat = () => {
  return isUser ? <Outlet /> : <Navigate to={"/login"} />;
};

export default Privateoutlat;
