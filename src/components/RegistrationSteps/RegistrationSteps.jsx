import React from "react";
import style from "./RegistrationSteps.module.css";
import Logo from "./undraw_svg_1.svg";

const RegistrationSteps = () => {
  return (
    <div className={style.wrapper} id='registrationSteps'>
      <div className={style.wrapperImage}>
        <img src={Logo} alt="logo" width="600" />
      </div>

      <div className={style.wrapperSteps}>
        <div className={style.wrapperStepElement}>
          <div className={style.stepNumber}>01</div>
          <h3 className={style.stepHeader}>Sing Up</h3>
          <p className={style.stepDescription}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, optio.
          </p>
        </div>
        <div className={style.wrapperStepElement}>
          <div className={style.stepNumber}>02</div>
          <h3 className={style.stepHeader}>Create Profile</h3>
          <p className={style.stepDescription}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, optio.
          </p>
        </div>
        <div className={style.wrapperStepElement}>
          <div className={style.stepNumber}>03</div>
          <h3 className={style.stepHeader}>Enjoy the app</h3>
          <p className={style.stepDescription}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, optio.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegistrationSteps;
