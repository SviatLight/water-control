import style from './WaterInfo.module.css'
import { useState } from 'react';
import bottle1 from '../../images/bottle100.png'
import bottle2 from '../../images/bottle125.png'
import bottle3 from '../../images/bottle150.png'
import bottle4 from '../../images/bottle175.png'
import bottle5 from '../../images/bottle200.png'
import bottle6 from '../../images/bottle300.png'
import bottle7 from '../../images/bottle400.png'
import moment from 'moment';

const WaterInfo = () => {
  const [water, setWater] = useState("");
  const [choise, setChoise] = useState("");


  const data = [
    { image: bottle1, title: '100ml', id: '100' },
    { image: bottle2, title: '125ml', id: '125' },
    { image: bottle3, title: '150ml', id: '150' },
    { image: bottle4, title: '175ml', id: '175' },
    { image: bottle5, title: '200ml', id: '200' },
    { image: bottle6, title: '300ml', id: '300' },
    { image: bottle7, title: '400ml', id: '400' },
  ];

  const handleSubmit = () => {
    var currentTime = moment();
    console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));
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
      <div className={style.container}>
        <h1>Об'єм посудини</h1>
        <div><h4>You need to drink  {localStorage.getItem("weight") * 30}  ml </h4></div>
        <div className={style.wrapper}>
          {data.map(item => (
            <div className={style.block} style={{ color: item.id === choise ? 'blue' : 'black', border: item.id === choise ? '3px solid blue' : 'none', backgroundColor: item.id === choise ? '#a5d3edd1' : 'white' }} onClick={() => handleSelect(item.id)}>
              <img src={item.image} />
              <div className={style.title}>{item.title}</div>
            </div>
          ))}

          <div className={style.inputContainer}>
            <label> <h4>Enter</h4>
              <input className={style.waterCounter}
                type="number" min="1"
                value={water}
                onChange={(event) => handleInput(event)}
              />
              <h4>ml</h4>
            </label>
          </div>
        </div>

        <div className="d-grid gap-2 col-6 mx-auto">
          <button
            className="btn btn-primary btn-lg btn-block"
            onClick={handleSubmit}>
            OK
          </button>
        </div>
      </div>
    </div>
  );
}

export default WaterInfo;
