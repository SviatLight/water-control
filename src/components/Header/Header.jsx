import React, { useEffect, useState } from "react";
import style from "./Header.module.css";
import waterIcn from "../../images/water.png";
import { useNavigate, useOutletContext } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

const Header = () => {
  const navigate = useNavigate();
  const { user, userHasSettings } = useOutletContext();
  const [headerBgColor, setHeaderBgColor] = useState("transparent");

  const listenScrollEvent = () => {
    window.scrollY < 100
      ? setHeaderBgColor("transparent")
      : setHeaderBgColor("rgba(39, 70, 133, 0.8)");
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
  });
  const profileButton = () => {
    return user ? (
      <div className={style.profile}>
        <BurgerMenu />
      </div>
    ) : (
      <div className={style.profile}>
        <button className="btn btn-primary" onClick={() => navigate("/login")}>
          Sign in
        </button>
      </div>
    );
  };

  return (
    <section className={style.header}>
      <header
        id="header"
        className="fixed-top d-flex align-items-center content"
        style={{ backgroundColor: ` ${headerBgColor}`, height: "80px" }}
      >
        <div
          className={`container d-flex justify-content-between align-items-center ${style.content}`}
        >
          <div className={style.logo}>
            <h1>
              <a href="index.html">Water Control</a>
            </h1>
          </div>
          <nav className={style.navbar}>
            <ul>
              <li>
                <a href="/">About</a>
              </li>
              <li>
                <a href="/">How It Work</a>
              </li>
              <li>
                <a href="/">FAQ</a>
              </li>
              <li>
                <a href="/feedback">Feedbacks</a>
              </li>
            </ul>
          </nav>
          {profileButton()}
        </div>
      </header>

      <div className={style.wave}>
        <svg
          width="100%"
          height="355px"
          viewBox="0 0 1920 355"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <g
            id="Page-1"
            stroke="none"
            stroke-width="1"
            fill="none"
            fill-rule="evenodd"
          >
            <g
              id="Apple-TV"
              transform="translate(0.000000, -402.000000)"
              fill="#FFFFFF"
            >
              <path
                d="M0,439.134243 C175.04074,464.89273 327.944386,477.771974 458.710937,477.771974 C654.860765,477.771974 870.645295,442.632362 1205.9828,410.192501 C1429.54114,388.565926 1667.54687,411.092417 1920,477.771974 L1920,757 L1017.15166,757 L0,757 L0,439.134243 Z"
                id="Path"
              ></path>
            </g>
          </g>
        </svg>
      </div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 hero-text-image">
            <div className="row">
              <div className="col-lg-8 text-center text-lg-start">
                <h1 data-aos="fade-right">Water</h1>
                <p
                  className={style.description}
                  data-aos="fade-right"
                  data-aos-delay="100"
                >
                  “Drinking water is like washing out your insides. The water
                  will cleanse the system, fill you up, decrease your caloric
                  load and improve the function of all your tissues.”
                </p>
                <p
                  data-aos="fade-right"
                  data-aos-delay="200"
                  data-aos-offset="-500"
                >
                  {user ? (
                    userHasSettings ? (
                      <button
                        onClick={() => navigate("/app")}
                        className={style.btnOutline}
                      >
                        Get started
                      </button>
                    ) : (
                      <button
                        onClick={() => navigate("/setup/gender")}
                        className={style.btnOutline}
                      >
                        Start settings
                      </button>
                    )
                  ) : (
                    <button
                      onClick={() => navigate("/login")}
                      className={style.btnOutline}
                    >
                      Sign in
                    </button>
                  )}
                </p>
              </div>
              <div className="col-lg-4 iphone-wrap">
                <img
                  src={waterIcn}
                  className={style.waterIcn}
                  alt="background"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
