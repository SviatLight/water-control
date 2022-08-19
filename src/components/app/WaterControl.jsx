import { useState,useRef } from "react";
import { Prev } from "react-bootstrap/esm/PageItem";
import style from "./WaterControl.module.css"


const WaterControl = () => {

  const [dailyRate, setDailyRate] = useState(1500);
  const [percentage, setPercentage] = useState(0);
  const [liters, setLiters] = useState(1500);
  let [consumed, setConsumed] = useState(0);
  const [glass, setGlass] = useState(300);
  let [nubmerGlasses, setNubmerGlasses] = useState(20);

  let vuputo = 0;



  const percentages = useRef();
  const remaineds = useRef();


  const buttonClick = () =>  {

    const percentagesStyles = percentages.current.style;
    const remainedsStyles = remaineds.current.style;
    setNubmerGlasses(nubmerGlasses + 20)

    if (percentagesStyles.height === "320px"){
      remainedsStyles.height = 0;
      percentagesStyles.height = 400 * nubmerGlasses / 100  + "px";
      setConsumed(consumed + glass);
      alert('Ви випили денну норму');
    } else{
      console.log(nubmerGlasses);
      percentagesStyles.height = 400 * nubmerGlasses / 100  + "px";
      console.log(percentagesStyles.height)
      percentagesStyles.visibility = 'visible';
      setConsumed(consumed + glass);
    }
  };

  return (
    <div className= {style.wrapper}>
      <div className={style.text_header_target}>{dailyRate} мл</div>
      <div className={style.cup}>
        <div className={style.remained} id="remained"  ref={remaineds} >
          <span id="liters">{liters - consumed} мл</span>
          <small>Remained</small>
        </div>
        <div className={style.percentage} ref={percentages} id="percentage" >{nubmerGlasses - 20}%</div>
      </div>
      {/* <div className={style.wrapper_target}>
        <div id="watter_drunk" className={style.watter_drunk}>{consumed}</div>
        <div className={style.target_dash}>/</div>
        <div id="target" className={style.target}>{dailyRate}</div>
      </div> */}

      <button className={style.button} onClick={() => buttonClick()} >Додати</button>

    </div>
   );




  // console.log(remained.current);

  //   const percentage = document.getElementById("percentage");
  //   const listers = document.getElementById('liters');
  //   listers.innerHTML = `${dailyRate}`;

  //   percentage.style.height = `${330 * nubmerGlasses / 100}px`
  //   percentage.innerText = `${Math.round(consumed * 100 / dailyRate)}%`
  //   nubmerGlasses += 20;


  //   if( percentage.style.height === "330px") {
  //     remained.style.visibility = 'hidden'
  //     remained.style.height = 0
  //   } else {
  //     remained.style.visibility = 'visible'
  //     listers.innerHTML = `${dailyRate - consumed}g`
  //   }


  //   let result = document.querySelector("#watter-drunk").innerHTML = consumed;
  //   console.log(result)
  //   if (result === dailyRate){
  //     alert('Ви випили денну норму');
  //     consumed += glass;

  //   }else{
  //     result = document.querySelector("#watter-drunk").innerHTML = consumed;
  //     consumed += glass;
  //     console.log(result)
  //   }
  // };
}

export default WaterControl;
