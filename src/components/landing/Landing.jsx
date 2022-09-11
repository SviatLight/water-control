import style from "./Landing.module.css";
import React from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import StepsToSuccess from "../StepToSuccess/StepsToSuccess";
import RegistrationSteps from "../RegistrationSteps/RegistrationSteps";
import Footer from "../Footer/Footer";

const Landing = () => {
  return (
    <div className={style.wrapper}>
      <StepsToSuccess />
      <RegistrationSteps />
      <Footer />
    </div>
  );
};

export default Landing;
