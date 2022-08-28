import React from 'react';
import style from '../measurements/UserInfo.module.css'
import {useOutletContext} from "react-router-dom";

const UserAge = () => {
  const [currentUser, setCurrentUser] = useOutletContext();

  const setAge = (userAge) => {
    setCurrentUser(prevState => ({...prevState, userAge}))
  }
  return (
    <div className={style.wrapper}>
      <div className={style.header}><h1>Your age</h1></div>
        <div className={style.block}>
          <label><p>Enter your age:</p>
            <input
              type="number" min="1"
              onChange={(event) => setAge(event.target.value)}
              placeholder='How old are you?'
            />
          </label>
        </div>
    </div>
  );
};

export default UserAge;
