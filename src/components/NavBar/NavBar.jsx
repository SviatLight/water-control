import React, { useEffect, useState } from "react";
import style from "./NavBar.module.css";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import { useNavigate, useOutletContext } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  const { user } = useOutletContext();
  const [headerBgColor, setHeaderBgColor] = useState("transparent")

  const listenScrollEvent = () => {
    window.scrollY < 300
      ? setHeaderBgColor("transparent")
      : setHeaderBgColor("rgba(39, 70, 133, 0.8)")
  }
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent)
  });
  const profileButton = () => {
    return (
      user ? (
        <div className={style.profile} >
          <BurgerMenu />
        </div >
      ) : (
        <div className={style.profile} >
          <button
            className="btn btn-primary"
            onClick={() => navigate("/login")}>
            Sign in
          </button>
        </div>
      )
    )
  }

  return (
    <div>
      <header id="header" className="fixed-top d-flex align-items-center content" style={{ backgroundColor: ` ${headerBgColor}`, height: '80px' }}>
        <div className={`container d-flex justify-content-between align-items-center ${style.content}`}>
          <div className={style.logo}>
            <h1><a href="index.html">Water Control</a></h1>
          </div>
          <nav className={style.navbar}>
            <ul>
              <li><a href="/">About</a></li>
              <li><a href="/">How It Work</a></li>
              <li><a href="/">FAQ</a></li>
              <li><a href="/feedback">Feedbacks</a></li>
            </ul>
          </nav>
          {profileButton()}
        </div>
      </header >
    </div >
  );
};

export default NavBar;
