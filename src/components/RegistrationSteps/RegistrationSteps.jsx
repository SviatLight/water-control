import React from "react";
import style from "./RegistrationSteps.module.css";
import Logo from "./undraw_svg_1.svg";
import Step from "./Step.jsx";

const RegistrationSteps = () => {
  return (
    <div className={style.wrapper} id="registrationSteps">
      <div className={style.wrapperImage}>
        <img src={Logo} alt="logo" width="600" />
      </div>

      <div className={style.wrapperSteps}>
        <Step
          number={"01"}
          title="Sing Up"
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, optio."
          }
        />
        <Step
          number={"02"}
          title="Create Profile"
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, optio."
          }
        />
        <Step
          number={"03"}
          title="Enjoy the app"
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, optio."
          }
        />
      </div>
    </div>
  );
};

export default RegistrationSteps;
