import style from './App.module.css';
import UserInfo from './components/measurements/UserInfo';

const App = () => {
  return (
    <div className={style.wrapper}>
      <UserInfo />
    </div>
  );
}

export default App;
