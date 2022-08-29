import React from "react";
import style from "./UserInfo.module.css";

const UserInfoHeaderButton = ({
  thisPageIndex,
  currentPageIndex,
  clickHandler,
  currentUser,
  userKey,
  children,
}) => {
  let className;
  let disabled = false;

  if (currentPageIndex > thisPageIndex) {
    className = `${style.setup_btn} ${style.setup_submit}`;
  } else if (currentPageIndex === thisPageIndex) {
    className = `${style.setup_btn} ${style.setup_active}`;
  } else if (currentUser[userKey]) {
    className = `${style.setup_btn} ${style.setup_submit}`;
  } else {
    className = style.setup_btn;
    disabled = true;
  }

  return (
    <button
      className={className}
      disabled={disabled}
      tabIndex={thisPageIndex}
      onClick={clickHandler}
    >
      {children}
    </button>
  );
};

export default UserInfoHeaderButton;
