import React from "react";
import style from "./UserInfo.module.css";
import boy from "../../images/boy.jpeg";
import girl from "../../images/girl.jpeg";
import { useOutletContext } from "react-router-dom";
import Title from "../Base/Title/Title";

const UserGender = () => {
  const [currentUser, setCurrentUser] = useOutletContext();

  const setGender = (gender) => {
    setCurrentUser((prevState) => ({ ...prevState, gender }));
  };

  return (
    <div className={style.user_info_wrapper}>
      <Title titleText={"Your gender"} />
      <div
        className={`${style.user_info_container} ${style.user_gender_container}`}
      >
        <div
          className={
            currentUser.gender === "male"
              ? `${style.gender} ${style.active}`
              : style.gender
          }
          onClick={() => setGender("male")}
        >
          <img className={`${style.images} ${style.gender_img}`} src={boy} />
          <span>Male</span>
        </div>
        <div
          className={
            currentUser.gender === "female"
              ? `${style.gender} ${style.active}`
              : style.gender
          }
          onClick={() => setGender("female")}
        >
          <img className={`${style.images} ${style.gender_img}`} src={girl} />
          <span>Female</span>
        </div>
      </div>
    </div>
  );
};

export default UserGender;
