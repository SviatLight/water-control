import React, { useState } from "react";
import style from "./UserInfo.module.css";
import boySleeping from "../../images/boySleeping.jpeg";
import girlSleeping from "../../images/girlSleeping.png";
import { Timeit } from "react-timeit";
import { useOutletContext } from "react-router-dom";
import Title from "../Base/Title/Title";

const UserGoSleep = () => {
  const [currentUser, setCurrentUser] = useOutletContext();

  const defaultTime = "22:00";

  const setTimeToSleep = (sleepTime) => {
    setCurrentUser((prevState) => ({ ...prevState, sleepTime }));
  };

  return (
    <div className={style.user_info_wrapper}>
      <Title titleText={"Time to sleep"} />
      <div className={style.user_info_container}>
        {currentUser.gender === "male" ? (
          <img className={style.images} src={boySleeping} />
        ) : (
          <img className={style.images} src={girlSleeping} />
        )}
        <div className={style.clock}>
          <Timeit
            defualtValue={defaultTime}
            onChange={(value) => setTimeToSleep(value)}
          />
        </div>
      </div>
    </div>
  );
};

export default UserGoSleep;
