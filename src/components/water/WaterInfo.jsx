import style from './WaterInfo.module.css'
import { useState } from 'react';
import bottle1 from '../../images/bottle100.png'
import bottle2 from '../../images/bottle125.png'
import bottle3 from '../../images/bottle150.png'
import bottle4 from '../../images/bottle175.png'
import bottle5 from '../../images/bottle200.png'
import bottle6 from '../../images/bottle300.png'
import bottle7 from '../../images/bottle400.png'
import bottle8 from '../../images/bottle.png'

const WaterInfo = () => {
  const [water, setWater] = useState("");
  const [choise, setChoise] = useState("");


  const data = [
    { image: bottle1, title: '100ml' },
    { image: bottle2, title: '125ml' },
    { image: bottle3, title: '150ml' },
    { image: bottle4, title: '175ml' },
    { image: bottle5, title: '200ml' },
    { image: bottle6, title: '300ml' },
    { image: bottle7, title: '400ml' },
  ];

  const handleSubmit = () => {
    console.log('result', choise)
  }

  const handleSelect = (item) => {
    setChoise(item);
    setWater('')
  }
  const handleInput = (event) => {
    setWater(event.target.value)
    setChoise(event.target.value)
  }

  return (
    <div>
      <h1>Об'єм посудини</h1>
      <div>You need to drink {localStorage.getItem("weight") * 30} ml</div>
      <div className={style.wrapper}>
        {data.map(item => (
          <div className={style.block} style={{ color: item.title === choise ? 'red' : 'black', border: item.title === choise ? '1px solid red' : 'none' }} onClick={() => handleSelect(item.title)}>
            <img src={item.image} />
            <div>{item.title}</div>
          </div>
        ))}

        <div className={style.inputContainer}>
          <label> Enter ml
            <input className={style.waterCounter}
              type="number" min="1"
              value={water}
              onChange={(event) => handleInput(event)}
            />
          </label>
        </div>
      </div>
      <div className={style.buttonOk}>
        <button onClick={handleSubmit}>OK</button>

      </div>

    </div>
  );
}

export default WaterInfo;
