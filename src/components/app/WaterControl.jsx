import { useState, useRef } from "react";
import style from "./WaterControl.module.css"
// import { Prev } from "react-bootstrap/esm/PageItem";


const WaterControl = () => {

  const [dailyRate, setDailyRate] = useState(1500);
  const [consumed, setConsumed] = useState(0);
  const [glass, setGlass] = useState(300);
  const nubmerGlassess = Math.round(glass / dailyRate * 100);
  const [nubmerGlasses, setNubmerGlasses] = useState(nubmerGlassess);


  const percentage = useRef();
  const remaineds = useRef();

  const buttonClick = () =>  {
    if(consumed < dailyRate ){
      // console.log(nubmerGlasses);
      const percentageStyles = percentage.current.style;
      const remainedsStyles = remaineds.current.style;
      setNubmerGlasses(nubmerGlassess + nubmerGlasses)

      if (nubmerGlasses === 100 || nubmerGlasses > 100){
        remainedsStyles.height = 0;
        remainedsStyles.visibility = "hidden";
        percentageStyles.height = 400 * nubmerGlasses / 100  + "px";
        setConsumed(consumed + glass);
      } else{
        // console.log(nubmerGlasses)
        percentageStyles.height = 400 * nubmerGlasses / 100  + "px";
        // console.log(percentageStyles.height)
        percentageStyles.visibility = 'visible';
        setConsumed(consumed + glass);
      }
    }

    else {
      return 0;
    }

  };

  return (
    <div className= {style.wrapper}>
      {/* <div className={style.text_header_target}>{dailyRate} мл</div> */}
      {consumed < dailyRate ? <div className={style.wrapper_target}>
        <div id="watter_drunk" className={style.watter_drunk}>{consumed} / {dailyRate}</div>
      </div>:<div className = {style.target_done} >Ви досягнули денну норму</div>}

      <div className={style.cup}>
        <div className={style.remained} id="remained"  ref={remaineds} >
          <span id="liters">{dailyRate - consumed} мл</span>
          <small>Remained</small>
        </div>
        <div className={style.percentage} ref={percentage} id="percentage" >{nubmerGlasses - nubmerGlassess}%</div>

      </div>
      <label className={style.button}  onClick={() => buttonClick()} />

    </div>
   );

}

export default WaterControl;
