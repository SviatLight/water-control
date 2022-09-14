import { Routes, Route } from "react-router-dom";
import style from "./App.module.css";
import Landing from "./components/landing/Landing";
import WaterInfo from "./components/water/WaterInfo";
import LoginLayout from "./components/AuthForm/LoginLayout";
import Login from "./components/AuthForm/Login";
import Registration from "./components/AuthForm/Registration";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import WaterControl from "./components/app/WaterControl";
import UserWakeUp from "./components/UserInfo/UserWakeUp";
import UserGoSleep from "./components/UserInfo/UserGoSleep";
import UserGender from "./components/UserInfo/UserGender";
import UserCreateContext from "./components/context/UserCreateContext";
import React from "react";
import UserName from "./components/UserInfo/UserName";
import UserAge from "./components/UserInfo/UserAge";
import UserWeight from "./components/UserInfo/UserWeight";
import LoginContext from "./components/context/LoginContext";
import LoginRequired from "./components/context/LoginRequired";
import NavBarLayout from "./components/NavBar/NavBarLayout";
import Feedback from "./components/Feedback/Feedback";
import Analytics from "./components/Analytics/Analytics";

const App = () => {
  return (
    <>
      <div className={style.wrapper}>
        <Routes>
          <Route path="/" element={<LoginContext />}>
            <Route element={<NavBarLayout />}>
              <Route path="/" element={<Landing />} />
              <Route path="/feedback" element={<Feedback />} />
              <Route element={<LoginRequired />}>
                <Route path="/water_info" element={<WaterInfo />} />
                <Route path="/app" element={<WaterControl />} />
                <Route path="/analytics" element={<Analytics />} />
              </Route>
            </Route>
          </Route>
          <Route element={<LoginLayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/registration" element={<Registration />} />
          </Route>
          <Route path="/setup/" element={<UserCreateContext />}>
            <Route path="gender" element={<UserGender />} />
            <Route path="user_name" element={<UserName />} />
            <Route path="user_age" element={<UserAge />} />
            <Route path="user_weight" element={<UserWeight />} />
            <Route path="wake_up" element={<UserWakeUp />} />
            <Route path="sleep_time" element={<UserGoSleep />} />
          </Route>
        </Routes>
      </div>
      <ToastContainer theme={"colored"} />
    </>
  );
};

export default App;
