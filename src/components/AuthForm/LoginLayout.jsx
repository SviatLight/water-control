import React from "react";
import { Outlet } from "react-router-dom";
import FormHeader from "./FormHeader";

const LoginLayout = ({ children }) => {
  return (
    <>
      <FormHeader>{children}</FormHeader>
      <Outlet />
    </>
  );
};

export default LoginLayout;
