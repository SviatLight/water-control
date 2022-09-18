import React from "react";
import style from "./StepToSuccess.module.css";
import { BarChart, BrightnessHigh, People } from "react-bootstrap-icons";
import Step from "./Step";
import Title from "../Base/Title/Title";

const StepsToSuccess = () => {
  return (
    <section className={style.section_wrapper} id="stepsToSuccess">
      <div className={style.container}>
        <div className={style.extra_div}></div>
        <Title
          titleText={"Save your time to using water control app"}
          extraClass={style.section_title}
        />
        <div className={style.extra_div}></div>
      </div>
      <div className={style.row}>
        <Step
          icon={<People />}
          title={"Explore Your Team"}
          text={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, optio."
          }
        />
        <Step
          icon={<BrightnessHigh />}
          title={"Digital Whiteboard"}
          text={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, optio."
          }
        />
        <Step
          icon={<BarChart />}
          title={"Design To Development"}
          text={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, optio."
          }
        />
      </div>
    </section>
  );
};

export default StepsToSuccess;
