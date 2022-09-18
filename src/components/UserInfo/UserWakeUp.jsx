import React, { useState } from "react";
import style from "./UserInfo.module.css";
import boyWakeUp from "../../images/boyWakeUp.jpeg";
import girlWakeUp from "../../images/girlWakeUp.jpeg";
import { Timeit } from "react-timeit";
import { useOutletContext } from "react-router-dom";
import Title from "../Base/Title/Title";

const UserWakeUp = () => {
  const [currentUser, setCurrentUser] = useOutletContext();

  const defaultTime = "5:30";

  const setWakeUpTime = (wakeUp) => {
    setCurrentUser((prevState) => ({ ...prevState, wakeUp }));
  };

  return (
    <div className={style.user_info_wrapper}>
      <Title titleText={"Wake up time"} />
      <div className={style.user_info_container}>
        {currentUser.gender === "male" ? (
          <img className={style.images} src={boyWakeUp} />
        ) : (
          <img className={style.images} src={girlWakeUp} />
        )}
        <div className={style.clock}>
          <Timeit
            defualtValue={defaultTime}
            onChange={(value) => setWakeUpTime(value)}
          />
        </div>
      </div>
    </div>
  );
};

export default UserWakeUp;
