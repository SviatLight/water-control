import React from "react";
import style from "./StepToSuccess.module.css";

const Step = ({ icon, title, text }) => {
  return (
    <div className={style.step_wrapper}>
      <div className={style.stepToSuccess}>
        <div className={style.step_icon_wrapper}>
          <i className={style.step_icon}>{icon}</i>
        </div>
        <h3 className={style.step_title}>{title}</h3>
        <p className={style.step_text}>{text}</p>
      </div>
    </div>
  );
};

export default Step;
