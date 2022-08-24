import React from 'react';
import NavBar from "./NavBar";
import {Outlet, useOutletContext} from "react-router-dom";

const NavBarLayout = ({children}) => {
  const context = useOutletContext()
  return (
    <>
      <NavBar/>
      {children}
      <Outlet context={context}/>
    </>
  );
};

export default NavBarLayout;
