import style from './History.module.css';

const History = ({ historyData, clearHistory }) => {

  return (
    <div className={style.container}>

      <h1>History</h1>
      <div className={style.history}>
        {
          historyData?.map(item => <div><h4>You drunk at {item.time} - {item.amountWater} ml</h4></div>)
        }
      </div>
      <div className="d-grid gap-2 col-6 mx-auto">
        <button
          className={`btn btn-primary btn-lg btn-block ${style.clear_history}`}
          onClick={clearHistory}>
          Clear history
        </button>
      </div>
    </div>
  );
}

export default History;
