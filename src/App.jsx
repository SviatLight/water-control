import {Routes, Route} from "react-router-dom";
import style from './App.module.css';
import Landing from './components/landing/Landing';
import UserInfo from './components/measurements/UserInfo';
import LoginLayout from './components/AuthForm/LoginLayout'
import Login from "./components/AuthForm/Login";
import Registration from "./components/AuthForm/Registration";


const App = () => {
  return (
    <div className={style.wrapper}>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/registration/weight" element={<UserInfo/>}/>
        <Route element={<LoginLayout/>}>
          <Route path="/login" element={<Login/>}/>
          <Route path="/registration" element={<Registration/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
