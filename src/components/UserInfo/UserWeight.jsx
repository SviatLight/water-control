import React from "react";
import style from "./UserInfo.module.css";
import { useOutletContext } from "react-router-dom";
import boyWeight from "../../images/boyWeight.png";
import girlWeight from "../../images/girlWeight.png";
import Title from "../Base/Title/Title";

const UserWeight = () => {
  const [currentUser, setCurrentUser] = useOutletContext();

  const setWeight = (userWeight) => {
    setCurrentUser((prevState) => ({ ...prevState, userWeight }));
  };
  return (
    <div className={style.user_info_wrapper}>
      <Title titleText={"Your weight"} />
      <div className={style.user_info_container}>
        {currentUser.gender === "male" ? (
          <img className={style.images} src={boyWeight} />
        ) : (
          <img className={style.images} src={girlWeight} />
        )}
        <div>
          <input
            type="number"
            min="1"
            className={`form-control ${style.info_input}`}
            id="floatingInput"
            placeholder="Your weight"
            onChange={(event) => setWeight(event.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default UserWeight;
