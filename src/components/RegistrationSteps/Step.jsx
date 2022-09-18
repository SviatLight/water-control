import React from "react";
import style from "./RegistrationSteps.module.css";

const Step = ({ number, title, description }) => {
  return (
    <div className={style.wrapperStepElement}>
      <div className={style.stepNumber}>{number}</div>
      <h3 className={style.stepHeader}>{title}</h3>
      <p className={style.stepDescription}>{description}</p>
    </div>
  );
};

export default Step;
