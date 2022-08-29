import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import style from "./AuthForm.module.css";

const FormHeader = () => {
  const location = useLocation();
  const [log, setLog] = useState(location.pathname === "/login");
  const [reg, setReg] = useState(location.pathname === "/registration");

  const logActive = () => {
    setLog(!log);
    setReg(false);
  };

  const regActive = () => {
    setReg(!reg);
    setLog(false);
  };

  return (
    <div className={style.login_container}>
      <div className={style.header}>
        <h3>
          <Link
            className={!log ? style.links : `${style.links} ${style.active}`}
            onClick={logActive}
            to="/login"
          >
            Login
          </Link>
        </h3>
        <h3>|</h3>
        <h3>
          <Link
            className={!reg ? style.links : `${style.links} ${style.active}`}
            onClick={regActive}
            to="/registration"
          >
            Registration
          </Link>
        </h3>
      </div>
    </div>
  );
};

export default FormHeader;
