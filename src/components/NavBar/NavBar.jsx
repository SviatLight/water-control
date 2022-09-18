import React from "react";
import style from "./NavBar.module.css";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import { Link, useNavigate, useOutletContext } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const NavBar = () => {
  const navigate = useNavigate();
  const { user, dbUser } = useOutletContext();

  const profileButton = () => {
    return user ? (
      <div className={style.profile}>
        <BurgerMenu />
      </div>
    ) : (
      <div className={style.profile}>
        <button className={style.btnOutline} onClick={() => navigate("/login")}>
          Sign in
        </button>
      </div>
    );
  };

  return (
    <header
      id="header"
      className={`fixed-top d-flex align-items-center content ${style.header_wrapper}`}
    >
      <div
        className={`container d-flex justify-content-between align-items-center ${style.content}`}
      >
        <div className={style.logo}>
          <h1>
            <Link to="/app">Water Control</Link>
          </h1>
        </div>
        <nav className={style.navbar}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li className={style.mob_version}>
              <HashLink to="/#stepsToSuccess">About</HashLink>
            </li>
            <li className={style.mob_version}>
              <HashLink to="/#registrationSteps">How It Work</HashLink>
            </li>
            <li>
              <Link to="/feedback">Feedbacks</Link>
            </li>
            {user && dbUser ? (
              <li>
                <Link to="/analytics">Analytics</Link>
              </li>
            ) : (
              <></>
            )}
          </ul>
        </nav>
        {profileButton()}
      </div>
    </header>
  );
};

export default NavBar;
