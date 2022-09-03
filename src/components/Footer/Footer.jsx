import React from "react";
import style from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.wrapperSections}>
        <div className={`${style.section} ${style.sectionAbout}`}>
          <h3 className={`${style.sectionHeader} ${style.sectionHeaderAbout}`}>
            About WatterControl
          </h3>
          <p className={style.AboutDescription}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            sunt magnam ex neque, dignissimos labore, dolorem iusto ut at porro,
            adipisci alias provident? Distinctio fuga odio at, atque
            necessitatibus eos?
          </p>
          <ul className={style.wrapperSocial}>
            <li>
              <a href="/">
                <i className="bi bi-twitter"></i>
              </a>
            </li>
            <li>
              <a href="/">
                <i className="bi bi-facebook"></i>
              </a>
            </li>
            <li>
              <a href="/">
                <i className="bi bi-instagram"></i>
              </a>
            </li>
            <li>
              <a href="/">
                <i className="bi bi-linkedin"></i>
              </a>
            </li>
          </ul>
        </div>

        <div className={`${style.section} ${style.sectionNavigation}`}>
          <h3
            className={`${style.sectionHeader} ${style.sectionHeaderNavigation}`}
          >
            Navigation
          </h3>
          <ul>
            <li className={style.listItem}>
              <a href="/">Pricing</a>
            </li>
            <li className={style.listItem}>
              <a href="/">Features</a>
            </li>
            <li className={style.listItem}>
              <a href="/">Blog</a>
            </li>
            <li className={style.listItem}>
              <a href="/">Contact</a>
            </li>
          </ul>
        </div>

        <div className={`${style.section} ${style.sectionServices}`}>
          <h3
            className={`${style.sectionHeader} ${style.sectionHeaderServices}`}
          >
            Services
          </h3>
          <ul>
            <li className={style.listItem}>
              <a href="/">Team</a>
            </li>
            <li className={style.listItem}>
              <a href="/">Collaboration</a>
            </li>
            <li className={style.listItem}>
              <a href="/">Todos</a>
            </li>
            <li className={style.listItem}>
              <a href="/">Event</a>
            </li>
          </ul>
        </div>

        <div className={`${style.section} ${style.sectionDownloads}`}>
          <h3
            className={`${style.sectionHeader} ${style.sectionHeaderDownloads}`}
          >
            Downloads
          </h3>
          <ul>
            <li className={style.listItem}>
              <a href="/">Get from the App Store</a>
            </li>
            <li className={style.listItem}>
              <a href="/">Get from the Play Store</a>
            </li>
          </ul>
        </div>
      </div>

      <div className={style.footerDescription}>
        Copyright Softland. All Rights Reversed <br />
        Designed by <span>WatterBallanceTeam</span>
      </div>
    </div>
  );
};

export default Footer;
