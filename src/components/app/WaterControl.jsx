import { useState, useRef, useEffect } from "react";
// import { Prev } from "react-bootstrap/esm/PageItem";
import style from "./WaterControl.module.css"
import History from "../HistoryWater/History";
import moment from 'moment';
import { useOutletContext } from "react-router-dom";

const WaterControl = () => {
  const { dbUser } = useOutletContext();

  const [dailyRate, setDailyRate] = useState(1500);
  let [consumed, setConsumed] = useState(0);
  const [glass, setGlass] = useState(300);
  let nubmerGlassess = Math.round(glass / dailyRate * 100);
  let [nubmerGlasses, setNubmerGlasses] = useState(nubmerGlassess);
  const [waterHistory, setWaterHistory] = useState([]);

  const percentage = useRef();
  const remaineds = useRef();

  // TODO: dailyRate and glass should take from DB
  // useEffect(() => {
  //   const dailyRateWater = +dbUser.userWeight * 30;
  //   const waterAmount = +dbUser.amountWater;
  //   setDailyRate(dailyRateWater);
  //   setGlass(waterAmount);
  // }, [dbUser]);

  const historyInfo = () => {
    const currentTime = moment();
    let timeData = {
      time: moment(currentTime).format("hh:mm"),
      amountWater: dbUser.amountWater
    }
    setWaterHistory([...waterHistory, timeData])
  }

  const clearHistory = () => {
    setWaterHistory([])
  }

  const buttonClick = () => {
    historyInfo()
    console.log(nubmerGlasses);
    const percentageStyles = percentage.current.style;
    const remainedsStyles = remaineds.current.style;
    setNubmerGlasses(nubmerGlassess + nubmerGlasses)

    if (nubmerGlasses === 100 || nubmerGlasses > 100) {
      remainedsStyles.height = 0;
      remainedsStyles.visibility = "hidden";
      percentageStyles.height = 400 * nubmerGlasses / 100 + "px";
      setConsumed(consumed + glass);
      alert('Ви випили денну норму');
    } else {
      console.log(nubmerGlasses)
      percentageStyles.height = 400 * nubmerGlasses / 100 + "px";
      console.log(percentageStyles.height)
      percentageStyles.visibility = 'visible';
      setConsumed(consumed + glass);
    }
  };

  return (
    <div className={style.wrapper}>
      {/* <div className={style.text_header_target}>{dailyRate} мл</div> */}
      <div className={style.wrapper_target}>
        <div id="watter_drunk" className={style.watter_drunk}>{consumed}</div>
        <div className={style.target_dash}>/</div>
        <div id="target" className={style.target}>{dailyRate}</div>
      </div>

      <div className={style.cup}>
        <div className={style.remained} id="remained" ref={remaineds} >
          <span id="liters">{dailyRate - consumed} мл</span>
          <small>Remained</small>
        </div>
        <div className={style.percentage} ref={percentage} id="percentage" >{nubmerGlasses - nubmerGlassess}%</div>
      </div>

      <button className={style.button} onClick={() => buttonClick()} >Додати</button>
      <History historyData={waterHistory} clearHistory={clearHistory} />
    </div>
  );

}

export default WaterControl;
