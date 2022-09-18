import React from "react";
import style from "./UserInfo.module.css";
import { useOutletContext } from "react-router-dom";
import boyAge from "../../images/boyAge.png";
import girlAge from "../../images/girlAge.png";
import Title from "../Base/Title/Title";

const UserAge = () => {
  const [currentUser, setCurrentUser] = useOutletContext();

  const setAge = (userAge) => {
    setCurrentUser((prevState) => ({ ...prevState, userAge }));
  };
  return (
    <div className={style.user_info_wrapper}>
      <Title titleText={"Your age"} />
      <div className={style.user_info_container}>
        {currentUser.gender === "male" ? (
          <img className={style.images} src={boyAge} />
        ) : (
          <img className={style.images} src={girlAge} />
        )}
        <div>
          <input
            type="number"
            min="1"
            className={`form-control ${style.info_input}`}
            id="floatingInput"
            placeholder="Your age"
            onChange={(event) => setAge(event.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default UserAge;
