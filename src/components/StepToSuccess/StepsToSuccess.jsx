import React from 'react';
import style from './StepToSuccess.module.css'
import {BarChart, BrightnessHigh, People} from "react-bootstrap-icons";
import Step from "./Step";

const StepsToSuccess = () => {
  return (
    <section className={style.section_wrapper}>
      <div className={style.container}>
        <div className={style.extra_div}></div>
        <h2 className={style.section_title}>Save your time to using water control app</h2>
        <div className={style.extra_div}></div>
      </div>
      <div className={style.row}>
        <Step icon={<People/>} title={"Explore Your Team"}
              text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, optio."}/>
        <Step icon={<BrightnessHigh/>} title={"Digital Whiteboard"}
              text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, optio."}/>
        <Step icon={<BarChart/>} title={"Design To Development"}
              text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, optio."}/>
      </div>
    </section>
  );
};

export default StepsToSuccess;
