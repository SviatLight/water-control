import style from './Landing.module.css'
import background from '../../images/landingBackground.jpg';
import React, {useContext} from "react";
import {Link, useNavigate} from "react-router-dom";
import {useAuthState} from "react-firebase-hooks/auth";
import {FirebaseContext} from "../../config";

const Landing = () => {
  const navigate = useNavigate()

  const {auth} = useContext(FirebaseContext)
  const [user] = useAuthState(auth)

  return (
    <header className={style.header}>
      <nav className={style.headerMenu}>
        <h2>Water Control</h2>
        <ul className={style.menu}>
          <li className={style.menuItem}><a href="/" className={style.menuLink}>About</a></li>
          <li className={style.menuItem}><a href="/" className={style.menuLink}>How It Work</a></li>
          <li className={style.menuItem}><a href="/" className={style.menuLink}>FAQ</a></li>
          {user ?
            (
              <div>
                <button className="btn btn-danger" onClick={() => auth.signOut()}>Sign out</button>
              </div>
            )
            :
            (
              <div>
                <button className="btn btn-success" onClick={() => navigate('/login')}>Sign in</button>
              </div>
            )}
        </ul>
      </nav>
      <div className={style.headerContent}>
        <section className={style.headerContainer}>
          <h2>Water</h2>
          <p>“Drinking water is like washing out your insides. The water will cleanse the system, fill you up, decrease
            your caloric load and improve the function of all your tissues.”</p>

          {user ?
            (
              <button className='btn btn-primary' onClick={() => navigate('/setup/gender')}>Start settings</button>
            )
            :
            (
              <button className="btn btn-success" onClick={() => navigate('/login')}>Start</button>
            )}
        </section>
        <div className={style.headerImg}>
          <img src={background} className={style.backgroundImgLanding} alt="background"/>
        </div>
      </div>
    </header>
  );
}

export default Landing;
