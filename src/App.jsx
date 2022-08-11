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


const App = () => {
  return (
    <>
      <div className={style.wrapper}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/registration/weight" element={<UserInfo />} />
          <Route path="/registration/water" element={<WaterInfo />} />
          <Route element={<LoginLayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/registration" element={<Registration />} />
          </Route>
        </Routes>
      </div>
      <ToastContainer theme={"colored"} />
    </>
  );
}

export default App;

