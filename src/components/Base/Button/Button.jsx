import React from "react";
import style from "./Button.module.css";

const Button = ({
  buttonText,
  onClick = null,
  extraClass = null,
  redBtn = false,
  disabled = null,
}) => {
  return (
    <button
      className={
        !redBtn
          ? `btn btn-primary ${style.btn_container} ${extraClass}`
          : extraClass
      }
      type="submit"
      onClick={onClick}
      disabled={disabled}
    >
      {buttonText}
    </button>
  );
};

export default Button;
