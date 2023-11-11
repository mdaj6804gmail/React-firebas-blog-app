import React from "react";
import { Routes, Route } from "react-router-dom";
import { routersComponentants, Roules } from "../assets/nav.assets";
import Privateoutlat from "./Privateoutlat";

const RouterMaping = () => {
  const publicRoute = routersComponentants.filter(
    (r) => r.roule === Roules.public
  );
  const privateRoute = routersComponentants.filter(
    (x) => x.roule === Roules.private
  );

  return (
    <Routes>
      {publicRoute.map(({ element, path }) => (
        <Route key={path} path={path} element={element} />
      ))}

      {/* Private Route Setup */}
      <Route path="/*" element={<Privateoutlat />}>
        {privateRoute.map(({ element, path }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Route>
    </Routes>
  );
};

export default RouterMaping;
