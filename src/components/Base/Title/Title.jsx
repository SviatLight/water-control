import React from "react";
import style from "./Title.module.css";

const Title = ({ titleText, extraClass = null }) => {
  return <h1 className={`${style.title} ${extraClass}`}>{titleText}</h1>;
};

export default Title;
