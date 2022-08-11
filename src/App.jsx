import { Routes, Route } from "react-router-dom";
import style from './App.module.css';
import Landing from './components/landing/Landing';
import UserInfo from './components/measurements/UserInfo';
import WaterInfo from './components/water/WaterInfo';

const App = () => {
  return (
    <div className={style.wrapper}>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/registration/weight" element={<UserInfo />} />
        <Route path="/registration/water" element={<WaterInfo />} />
      </Routes>
    </div>
  );
}

export default App;
