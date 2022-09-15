import React from "react";
import { Outlet, useOutletContext } from "react-router-dom";
import NavBar from "./NavBar";

const NavBarLayout = ({ children }) => {
  const context = useOutletContext();
  return (
    <>
      <NavBar />
      {children}
      <Outlet context={context} />
    </>
  );
};

export default NavBarLayout;
