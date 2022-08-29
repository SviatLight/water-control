import React from "react";
import style from "./UserInfo.module.css";
import boy from "../../images/boy.jpeg";
import girl from "../../images/girl.jpeg";
import { useOutletContext } from "react-router-dom";

const UserGender = () => {
  const [currentUser, setCurrentUser] = useOutletContext();

  const setGender = (gender) => {
    setCurrentUser((prevState) => ({ ...prevState, gender }));
  };

  return (
    <div className={style.user_info_wrapper}>
      <h1>Your gender</h1>
      <div className={style.user_info_container}>
        <div
          className={
            currentUser.gender === "male"
              ? `${style.gender} ${style.active}`
              : style.gender
          }
          onClick={() => setGender("male")}
        >
          <img className={style.images} src={boy} />
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
          <img className={style.images} src={girl} />
          <span>Female</span>
        </div>
      </div>
    </div>
  );
};

export default UserGender;
