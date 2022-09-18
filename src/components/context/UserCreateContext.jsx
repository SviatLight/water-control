import React, { useContext, useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import style from "../UserInfo/UserInfo.module.css";
import { db, FirebaseContext } from "../../config";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  Alarm,
  CupStraw,
  GenderFemale,
  GenderMale,
  Info,
  MoonStars,
  Person,
  PersonFill,
  PersonHearts,
  PersonLinesFill,
  Sun,
} from "react-bootstrap-icons";
import { ref, set } from "firebase/database";
import { toast } from "react-toastify";
import UserInfoHeaderButton from "../UserInfo/UserInfoHeaderButton";
import { capitalizeAll } from "../../helpers/utils";
import Button from "../Base/Button/Button";

const UserCreateContext = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({
    gender: null,
    userName: null,
    userAge: null,
    userWeight: null,
    wakeUp: null,
    sleepTime: null,
    amountWater: null,
    historyOfDrunkWater: {},
  });
  const setupPages = [
    "gender",
    "user_name",
    "user_age",
    "user_weight",
    "wake_up",
    "sleep_time",
    "amount_water",
  ];
  const location = useLocation();
  const pageIndex = setupPages.indexOf(location.pathname.split("/").at(-1));
  const nextPageName = setupPages[pageIndex + 1];
  const currentUserProperty = capitalizeAll(
    setupPages[pageIndex].split("_")
  ).replaceAll(" ", "");

  const { auth } = useContext(FirebaseContext);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user]);

  const writeToDatabase = () => {
    const configTableRef = ref(db, user.uid);
    set(configTableRef, currentUser);
  };

  const finishUserSettings = () => {
    writeToDatabase();
    navigate("/");
    toast.success("You finished your settings!");
  };

  const clickHandler = (e) => {
    navigate(`/setup/${setupPages[e.currentTarget.tabIndex]}`);
  };

  return (
    <>
      <div className={style.setup_header}>
        <UserInfoHeaderButton
          thisPageIndex={0}
          currentPageIndex={pageIndex}
          clickHandler={clickHandler}
          currentUser={currentUser}
          userKey="gender"
        >
          <GenderMale className={`${style.gender_icon} ${style.gender_male}`} />
          <GenderFemale
            className={`${style.gender_icon} ${style.gender_female}`}
          />
        </UserInfoHeaderButton>

        <UserInfoHeaderButton
          thisPageIndex={1}
          currentPageIndex={pageIndex}
          clickHandler={clickHandler}
          currentUser={currentUser}
          userKey="userName"
        >
          <Person className={style.gender_icon} />
          <Info className={style.gender_icon} />
        </UserInfoHeaderButton>

        <UserInfoHeaderButton
          thisPageIndex={2}
          currentPageIndex={pageIndex}
          clickHandler={clickHandler}
          currentUser={currentUser}
          userKey="userAge"
        >
          <PersonHearts className={style.gender_icon} />
        </UserInfoHeaderButton>

        <UserInfoHeaderButton
          thisPageIndex={3}
          currentPageIndex={pageIndex}
          clickHandler={clickHandler}
          currentUser={currentUser}
          userKey="userWeight"
        >
          <PersonLinesFill className={style.gender_icon} />
        </UserInfoHeaderButton>

        <UserInfoHeaderButton
          thisPageIndex={4}
          currentPageIndex={pageIndex}
          clickHandler={clickHandler}
          currentUser={currentUser}
          userKey="wakeUp"
        >
          <Alarm className={style.gender_icon} />
          <Sun className={`${style.gender_icon} ${style.sun}`} />
        </UserInfoHeaderButton>

        <UserInfoHeaderButton
          thisPageIndex={5}
          currentPageIndex={pageIndex}
          clickHandler={clickHandler}
          currentUser={currentUser}
          userKey="sleepTime"
        >
          <Alarm className={style.gender_icon} />
          <MoonStars className={`${style.gender_icon} ${style.moon}`} />
        </UserInfoHeaderButton>

        <UserInfoHeaderButton
          thisPageIndex={6}
          currentPageIndex={pageIndex}
          clickHandler={clickHandler}
          currentUser={currentUser}
          userKey="amountWater"
        >
          <PersonFill className={style.gender_icon} />
          <CupStraw className={style.gender_icon} />
        </UserInfoHeaderButton>
      </div>

      {children}

      <Outlet context={[currentUser, setCurrentUser]} />

      <div
        className={pageIndex !== 0 ? style.prev_next_buttons : style.btn_next}
      >
        {pageIndex !== 0 ? (
          <Button
            buttonText={"Prev"}
            onClick={() => navigate(`/setup/${setupPages[pageIndex - 1]}`)}
          />
        ) : (
          <></>
        )}

        {pageIndex === setupPages.length - 1 ? (
          <Button
            buttonText={"Finish"}
            onClick={finishUserSettings}
            btnGreen={true}
            disabled={!currentUser[currentUserProperty]}
          />
        ) : (
          <Button
            buttonText={"Next"}
            onClick={() => navigate(`/setup/${nextPageName}`)}
            disabled={!currentUser[currentUserProperty]}
          />
        )}
      </div>
    </>
  );
};

export default UserCreateContext;
