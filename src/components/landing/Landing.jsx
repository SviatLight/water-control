import style from "./Landing.module.css";
import React from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import StepsToSuccess from "../StepToSuccess/StepsToSuccess";
import RegistrationSteps from "../RegistrationSteps/RegistrationSteps";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Landing = () => {
  return (
    <div className={style.wrapper}>
      <Header />
      <StepsToSuccess />
      <RegistrationSteps />
      <Footer />
    </div>
  );
};

export default Landing;
