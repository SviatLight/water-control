import { useState, useRef } from "react";
// import { Prev } from "react-bootstrap/esm/PageItem";
import style from "./WaterControl.module.css"
import History from "../HistoryWater/History";

const WaterControl = () => {

  const [dailyRate, setDailyRate] = useState(1500);
  let [consumed, setConsumed] = useState(0);
  const [glass, setGlass] = useState(300);
  let nubmerGlassess = Math.round(glass / dailyRate * 100);
  let [nubmerGlasses, setNubmerGlasses] = useState(nubmerGlassess);


  const percentage = useRef();
  const remaineds = useRef();


  const buttonClick = () => {
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
      <History />
    </div>
  );

}

export default WaterControl;
