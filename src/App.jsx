import { Routes, Route } from "react-router-dom";
import style from './App.module.css';
import Landing from './components/landing/Landing';
import UserInfo from './components/measurements/UserInfo';
import WaterInfo from './components/water/WaterInfo';
import LoginLayout from './components/AuthForm/LoginLayout'
import Login from "./components/AuthForm/Login";
import Registration from "./components/AuthForm/Registration";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import WaterControl from "./components/app/WaterControl";
import UserWakeUp from "./components/UserInfo/UserWakeUp";
import UserGoSleep from "./components/UserInfo/UserGoSleep";
import UserGender from "./components/UserInfo/UserGender";
import UserCreateContext from "./components/UserInfo/UserCreateContext";
import React from "react";
import UserName from "./components/UserInfo/UserName";


const App = () => {
  return (
    <>
      <div className={style.wrapper}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/registration/sex/weight" element={<UserInfo />} />
          <Route path="/registration/sex/weight/sleep/water" element={<WaterInfo />} />
          <Route path="/registration/weight" element={<UserInfo/>}/>
          <Route element={<LoginLayout/>}>
            <Route path="/login" element={<Login/>}/>
            <Route path="/registration" element={<Registration/>}/>
            <Route path="/app" element={<WaterControl />} />
            <Route path="/setup/" element={<UserCreateContext/>}>
              <Route path="gender" element={<UserGender/>}/>
              <Route path="user_name" element={<UserName/>}/>
              <Route path="wake_up" element={<UserWakeUp/>}/>
              <Route path="sleep_time" element={<UserGoSleep/>}/>
            </Route>
          </Route>


        </Routes>
      </div>
      <ToastContainer theme={"colored"} />
    </>
  );
}

export default App;
