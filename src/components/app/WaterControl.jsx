import {useState, useRef, useEffect} from "react";
import style from "./WaterControl.module.css";
import History from "../HistoryWater/History";
import moment from "moment";
import {useOutletContext} from "react-router-dom";
import {toast} from "react-toastify";
import {ref, update} from "firebase/database";
import glassOfWater from "../../images/glass-of-water.png";

const WaterControl = () => {
  const {db, user, dbUser, setDbUser} = useOutletContext();

  const percentage = useRef();
  const remains = useRef();

  const [dailyRate, setDailyRate] = useState(0);
  const [drunkToday, setDrunkToday] = useState(0);
  const [waterHistory, setWaterHistory] = useState({});

  let drinkTodayPercent = Math.round((drunkToday / dailyRate) * 100);

  const curDate = moment().format("MM-DD-YYYY");

  useEffect(() => {
    if (Object.keys(dbUser).length > 0) {
      setDailyRate(dbUser.userWeight * 30);

      const totalDrink = dbUser.historyOfDrunkWater
        ? dbUser.historyOfDrunkWater[curDate]
          ? Object.values(dbUser.historyOfDrunkWater[curDate]).reduce(
            (a, b) => a + b,
            0
          )
          : 0
        : 0;

      setDrunkToday(totalDrink);
      drinkTodayPercent = Math.round(
        (totalDrink / (dbUser.userWeight * 30)) * 100
      );
      if (totalDrink !== 0)
        setWaterHistory(dbUser.historyOfDrunkWater[curDate]);
      drawWaterPercent();
    }
  }, [dbUser]);

  const clearHistory = () => {
    setWaterHistory({});
  };

  const updateInfo = () => {
    const historyOfWater = dbUser.historyOfDrunkWater || {};

    const curTime = moment().format("hh:mm:ss");
    if (!(curDate in historyOfWater)) {
      historyOfWater[curDate] = {};
    }
    historyOfWater[curDate][curTime] = +dbUser.amountWater;

    const updUser = {
      ...dbUser,
      historyOfDrunkWater: historyOfWater,
    };
    setDbUser(updUser);
    update(ref(db), {[user.uid]: updUser});
  };

  const drawWaterPercent = () => {
    const percentageStyles = percentage.current.style;
    const remainsStyles = remains.current.style;
    if (drinkTodayPercent >= 100) {
      remainsStyles.height = 0;
      remainsStyles.visibility = "hidden";
      percentageStyles.height = "100%";
      toast.info("Ви випили денну норму води");
    } else {
      percentageStyles.height = `${drinkTodayPercent}%`;
      percentageStyles.visibility = "visible";
    }
  };

  const addWater = () => {
    updateInfo();
    drawWaterPercent();
  };

  return (
    <div className={style.water_control_wrapper}>
      <div className={style.background_div}></div>
      <div className={style.wrapper}>
        <div className={style.wrapper_target}>
          <div id="watter_drunk" className={style.watter_drunk}>
            {drunkToday.toString()}
          </div>
          <div className={style.target_dash}>/</div>
          <div id="target" className={style.target}>
            {dailyRate.toString()}
          </div>
        </div>
        <div className={style.cup}>
          <div className={style.remained} id="remained" ref={remains}>
            <span id="liters">{dailyRate - drunkToday} мл</span>
            <small>Remained</small>
          </div>
          <div className={style.percentage} ref={percentage} id="percentage">
            {drinkTodayPercent}%
          </div>
        </div>

        <div className={style.glassOfWater} onClick={addWater}>
          <img src={glassOfWater} alt="glassOfWater"/>
        </div>
      </div>
      <div>
        <History historyData={waterHistory} clearHistory={clearHistory}/>
      </div>
    </div>
  );
};

export default WaterControl;
