import { useState,useRef } from "react";
import { Prev } from "react-bootstrap/esm/PageItem";
import style from "./WaterControl.module.css"


const WaterControl = () => {

  const [dailyRate, setDailyRate] = useState(1500);
  const [percentage, setPercentage] = useState(0);
  const [liters, setLiters] = useState(1500);
  const [consumed, setConsumed] = useState(0);
  const [glass, setGlass] = useState(300);
  const [nubmerGlasses, setNubmerGlasses] = useState(0);

  const vuputo = Math.round(consumed * 100 / dailyRate)

  // const [glass, setGlass] = useState(0);
  // const [consumed, setConsumed] = useState(0);
  // const [nubmerGlasses, setNubmerGlasses] = useState(0);

  // listers.innerHTML = `${dailyRate}`;

  const remained = useRef();
  const buttonClick = () =>  {
    if (vuputo === 100 || vuputo > 100) {
    }

    console.log(percentage.style)
    setNubmerGlasses(prev => prev + 20 )
    setPercentage(prev => prev + 200);
    setConsumed(prev => prev + glass)

  };

  return (
    <div className= {style.wrapper}>

      {/* <div className={style.text_header}>Привіт</div> */}
      <div className={style.text_header_target}>{dailyRate} мл</div>
      {/* <div className={style.text_header}>Ціль на сьогодні</div> */}
      <div className={style.cup}>
        <div className={style.remained} id="remained"   >
          <span id="liters">{liters} мл</span>
          <small>Remained</small>
        </div>
        <div className={style.percentage} id="percentage" style={{height:`${400 * nubmerGlasses / 100}`+ "px"}}>{vuputo}%</div>

      </div>
      <div className={style.wrapper_target}>
        <div id="watter_drunk" className={style.watter_drunk}>{consumed}</div>
        <div className={style.target_dash}>/</div>
        <div id="target" className={style.target}>{dailyRate}</div>
      </div>

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
