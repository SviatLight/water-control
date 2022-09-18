import React, { useRef, useState } from "react";
import style from "./BurgerMenu.module.css";
import { Check, Pencil, PersonCircle, X, XLg } from "react-bootstrap-icons";
import { useNavigate, useOutletContext } from "react-router-dom";
import { ref, update } from "firebase/database";
import { toast } from "react-toastify";
import moment from "moment/moment";
import Button from "../Base/Button/Button";

const BurgerMenu = () => {
  const [active, setActive] = useState(false);
  const [edit, setEdit] = useState(false);

  const { user, dbUser, setDbUser, userHasSettings, auth, db } =
    useOutletContext();

  const nameRef = useRef();
  const genderRef = useRef();
  const ageRef = useRef();
  const weightRef = useRef();
  const wakeUpRef = useRef();
  const sleepTimeRef = useRef();
  const amountWaterRef = useRef();

  const navigate = useNavigate();
  const curDate = moment().format("MM-DD-YYYY");

  const updateInfo = () => {
    const updUser = {
      ...dbUser,
      userName: nameRef.current.value || nameRef.current.placeholder,
      gender: genderRef.current.value || genderRef.current.placeholder,
      userAge: ageRef.current.value || ageRef.current.placeholder,
      userWeight: weightRef.current.value || weightRef.current.placeholder,
      wakeUp: wakeUpRef.current.value || wakeUpRef.current.placeholder,
      sleepTime: sleepTimeRef.current.value || sleepTimeRef.current.placeholder,
      amountWater:
        amountWaterRef.current.value || amountWaterRef.current.placeholder,
    };
    console.log(updUser);
    update(ref(db), { [user.uid]: updUser });
    setEdit(!edit);
    setDbUser(updUser);
    toast.success("You successfully changed information about yourself!");
    console.log(updUser);
  };

  const cancelUpdate = () => {
    setEdit(!edit);
    toast.info("You didn`t make any update!");
  };

  const exit = () => {
    auth.signOut();
    navigate("/");
    toast.info("You are logged out!");
  };

  return userHasSettings ? (
    <div onClick={active ? () => setActive(false) : () => setActive(true)}>
      <PersonCircle className={style.burger_icons} />
      <div
        className={
          active ? `${style.burger_menu} ${style.active}` : style.burger_menu
        }
        onClick={() => setActive(true)}
      >
        <div
          className={
            active
              ? `${style.burger_menu_content} ${style.active}`
              : style.burger_menu_content
          }
          onClick={(e) => e.stopPropagation()}
        >
          <div onClick={() => setActive(false)}>
            <XLg
              className={`${style.burger_icons} ${style.burger_icon_close}`}
            />
          </div>
          <div className={style.burger_user_info}>
            <div className={style.burger_person}>
              {dbUser.userName ? dbUser.userName.at(0) : ""}
            </div>
            <div className={edit ? style.grid_div : ""}>
              Name:
              {edit ? (
                <input
                  ref={nameRef}
                  type="name"
                  placeholder={dbUser.userName}
                  className={`form-control ${style.burger_input_change}`}
                />
              ) : (
                <span className={style.burger_info}> {dbUser.userName}</span>
              )}
            </div>
            <div>
              Email: <span className={style.burger_info}>{user.email}</span>
            </div>
            <div className={edit ? style.grid_div : ""}>
              Gender:
              {edit ? (
                <select
                  ref={genderRef}
                  defaultValue={dbUser.gender}
                  className={`form-select form-select-sm ${style.burger_input_change} ${style.burger_gender_select}`}
                  aria-label=".form-select-sm example"
                >
                  <option defaultValue="male">male</option>
                  <option defaultValue="female">female</option>
                </select>
              ) : (
                <span className={style.burger_info}> {dbUser.gender}</span>
              )}
            </div>
            <div className={edit ? style.grid_div : ""}>
              Age:
              {edit ? (
                <input
                  ref={ageRef}
                  type="number"
                  min="1"
                  max="100"
                  placeholder={dbUser.userAge}
                  className={`form-control ${style.burger_input_change}`}
                />
              ) : (
                <span className={style.burger_info}>
                  {" "}
                  {dbUser.userAge} y.o.
                </span>
              )}
            </div>
            <div className={edit ? style.grid_div : ""}>
              Weight:
              {edit ? (
                <input
                  ref={weightRef}
                  type="number"
                  min="1"
                  max="200"
                  placeholder={dbUser.userWeight}
                  className={`form-control ${style.burger_input_change}`}
                />
              ) : (
                <span className={style.burger_info}>
                  {" "}
                  {dbUser.userWeight} kg
                </span>
              )}
            </div>
            <div className={edit ? style.grid_div : ""}>
              Wake up time:
              {edit ? (
                <input
                  ref={wakeUpRef}
                  type="time"
                  className={`form-control ${style.burger_input_change}`}
                  defaultValue={dbUser.wakeUp}
                />
              ) : (
                <span className={style.burger_info}> {dbUser.wakeUp}</span>
              )}
            </div>
            <div className={edit ? style.grid_div : ""}>
              Time to sleep:
              {edit ? (
                <input
                  ref={sleepTimeRef}
                  type="time"
                  className={`form-control ${style.burger_input_change}`}
                  defaultValue={dbUser.sleepTime}
                />
              ) : (
                <span className={style.burger_info}> {dbUser.sleepTime}</span>
              )}
            </div>

            <div className={edit ? style.grid_div : ""}>
              Amount of water:
              {edit ? (
                <input
                  ref={amountWaterRef}
                  type="number"
                  className={`form-control ${style.burger_input_change}`}
                  defaultValue={dbUser.amountWater}
                />
              ) : (
                <span className={style.burger_info}>
                  {" "}
                  {dbUser.amountWater == null
                    ? "0"
                    : dbUser.amountWater} ml{" "}
                </span>
              )}
            </div>

            <div>
              Drunk water today:{" "}
              <span className={style.burger_info}>
                {dbUser.historyOfDrunkWater
                  ? dbUser.historyOfDrunkWater[curDate]
                    ? Object.values(dbUser.historyOfDrunkWater[curDate]).reduce(
                        (a, b) => a + b,
                        0
                      )
                    : 0
                  : 0}{" "}
                ml
              </span>
            </div>

            <div className={style.burger_change_info}>
              {edit ? (
                <div className={style.burger_edit_bnt}>
                  <div
                    className={style.burger_change_apply}
                    onClick={updateInfo}
                  >
                    Change
                    <Check
                      className={`${style.burger_icons} ${style.burger_icon_change_apply}`}
                    />
                  </div>
                  <div
                    className={style.burger_change_cancel}
                    onClick={cancelUpdate}
                  >
                    Cancel
                    <X
                      className={`${style.burger_icons} ${style.burger_icon_change_cancel}`}
                    />
                  </div>
                </div>
              ) : (
                <div onClick={() => setEdit(!edit)}>
                  Change information
                  <Pencil className={style.burger_icon_pencil} />
                </div>
              )}
            </div>
            <Button
              buttonText={"Sign out"}
              onClick={exit}
              extraClass={"btn btn-danger mt-0"}
              redBtn={true}
            />
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div onClick={active ? () => setActive(false) : () => setActive(true)}>
      <PersonCircle className={style.burger_icons} />
      <div
        className={
          active ? `${style.burger_menu} ${style.active}` : style.burger_menu
        }
        onClick={() => setActive(true)}
      >
        <div
          className={
            active
              ? `${style.burger_menu_content} ${style.active}`
              : style.burger_menu_content
          }
          onClick={(e) => e.stopPropagation()}
        >
          <div onClick={() => setActive(false)}>
            <XLg
              className={`${style.burger_icons} ${style.burger_icon_close}`}
            />
          </div>
          <div className={style.no_settings}>
            <PersonCircle
              className={`${style.burger_icons} ${style.burger_icon_person_no_settings}`}
            />
            <div>You have not provided any information about yourself</div>
            <Button
              buttonText={"Start settings"}
              onClick={() => navigate("/setup/gender")}
              extraClass={"mb-0"}
            />
            <Button
              buttonText={"Sign out"}
              onClick={exit}
              extraClass={"btn btn-danger mt-0"}
              redBtn={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BurgerMenu;
