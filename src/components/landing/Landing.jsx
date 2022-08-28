import style from './Landing.module.css'
import background from '../../images/landingBackground.jpg';
import React from "react";
import {useNavigate, useOutletContext} from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate()
  const {user, userHasSettings} = useOutletContext()

  return (
    <div className={style.header}>
      <div className={style.headerContent}>
        <section className={style.headerContainer}>
          <h2>Water</h2>
          <p>“Drinking water is like washing out your insides. The water will cleanse the system, fill you up, decrease
            your caloric load and improve the function of all your tissues.”</p>

          {user ?

            userHasSettings
              ? <button className='btn btn-primary' onClick={() => navigate('/app')}>Start</button>
              : <button className='btn btn-primary' onClick={() => navigate('/setup/gender')}>Start settings</button>

            :
            (
              <button className="btn btn-success" onClick={() => navigate('/login')}>Sign in</button>
            )}
        </section>
        <div className={style.headerImg}>
          <img src={background} className={style.backgroundImgLanding} alt="background"/>
        </div>
      </div>
    </div>
  );
}

export default Landing;
