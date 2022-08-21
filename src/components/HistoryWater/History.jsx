import style from './History.module.css';
import { useState, useEffect } from 'react';


const History = () => {

  const [historyData, setHistoryData] = useState([]);
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('drinkTime') || '[]')
    setHistoryData(data)
  }, [])

  const clearHistory = () => {
    setHistoryData([])
    return localStorage.setItem('drinkTime', '[]');
  }


  return (
    <div className={style.container}>
      <div>
        <h1>History</h1>
        <div className="d-grid gap-2 col-6 mx-auto">
          <button
            className="btn btn-primary btn-lg btn-block"
            onClick={clearHistory}>
            Clear history
          </button>
        </div>
        {
          historyData?.map(item => <div><h4>You drunk at {item.time} - {item.choise} ml</h4></div>)
        }

      </div>
    </div>
  );
}

export default History;
