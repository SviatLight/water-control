import React from 'react';
import style from './NavBar.module.css'
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import {useNavigate, useOutletContext} from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate()
  const {user} = useOutletContext()
  return (
    <header className={style.nav_bar}>
      <h2>Water Control</h2>
      <ul className={style.nav_bar_menu}>
        <li className={style.menuItem}><a href="/">About</a></li>
        <li className={style.menuItem}><a href="/">How It Work</a></li>
        <li className={style.menuItem}><a href="/">FAQ</a></li>
        {user ?
          (
            <div>
              <BurgerMenu/>
            </div>
          )
          :
          (
            <div>
              <button className="btn btn-success" onClick={() => navigate('/login')}>Sign in</button>
            </div>
          )}
      </ul>
    </header>
  );
};

export default NavBar;
