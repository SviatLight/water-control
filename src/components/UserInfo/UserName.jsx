import React from "react";
import style from "./UserInfo.module.css";
import { useOutletContext } from "react-router-dom";
import boyHi from "../../images/boyHi.jpeg";
import girlHi from "../../images/girlHi.png";

const UserName = () => {
  const [currentUser, setCurrentUser] = useOutletContext();

  const setName = (userName) => {
    setCurrentUser((prevState) => ({ ...prevState, userName }));
  };

  return (
    <div className={style.user_info_wrapper}>
      <h1>Your name</h1>
      <div className={style.user_info_container}>
        {currentUser.gender === "male" ? (
          <img className={style.images} src={boyHi} />
        ) : (
          <img className={style.images} src={girlHi} />
        )}
        <div>
          <input
            type="name"
            className={`form-control ${style.info_input}`}
            id="floatingInput"
            placeholder="Your name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default UserName;
