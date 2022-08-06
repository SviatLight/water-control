import { Routes, Route } from "react-router-dom";
import style from './App.module.css';
import Landing from './components/landing/Landing';
import UserInfo from './components/measurements/UserInfo';

const App = () => {
  return (
    <div className={style.wrapper}>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/registration/weight" element={<UserInfo />} />
      </Routes>
    </div>
  );
}

export default App;
