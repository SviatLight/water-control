import React from "react";
import { Outlet, useOutletContext } from "react-router-dom";
import Header from "../Header/Header";

const NavBarLayout = ({ children }) => {
  const context = useOutletContext();
  return (
    <>
      <Header />
      {children}
      <Outlet context={context} />
    </>
  );
};

export default NavBarLayout;
