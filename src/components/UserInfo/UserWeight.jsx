import React from "react";
import style from "../measurements/UserInfo.module.css";
import { useOutletContext } from "react-router-dom";

const UserWeight = () => {
  const [currentUser, setCurrentUser] = useOutletContext();

  const setWeight = (userWeight) => {
    setCurrentUser((prevState) => ({ ...prevState, userWeight }));
  };
  return (
    <div className={style.wrapper}>
      <div className={style.header}>
        <h1>Your weight</h1>
      </div>
      <div className={style.block}>
        <label>
          {" "}
          <p>Enter your weight:</p>
          <input
            type="number"
            min="1"
            onChange={(event) => setWeight(event.target.value)}
            placeholder="Go ahead and lie"
          />
        </label>
      </div>
    </div>
  );
};

export default UserWeight;
