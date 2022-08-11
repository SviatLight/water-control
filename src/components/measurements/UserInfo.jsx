import { useState } from 'react';
import style from './UserInfo.module.css'


const UserInfo = () => {
  const [weight, setWeight] = useState("");
  const [age, setAge] = useState(0);
  const [errorWeight, setErrorWeight] = useState(false);
  const [errorAge, setErrorAge] = useState(false);
  const errorMessage = 'please fill out this field';

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrorWeight(!weight);
    setErrorAge(!age);
    console.log(`your weight is ${weight}`);
    console.log(`your age is ${age}`);
    localStorage.setItem("weight", weight);
  }

  return (
    <div className={style.wrapper}>
      <form onSubmit={handleSubmit}>
        <div className={style.block}>
          <label> Enter your weight:
            <input
              type="number" min="1"
              value={weight}
              onChange={(event) => setWeight(event.target.value)}
              placeholder='go ahead and lie'
            />
          </label>
          <div className={style.error}>{errorWeight ? errorMessage : null}</div>
        </div>
        <div className={style.block}>
          <label>Enter your age:
            <input
              type="number" min="0" max="100"
              value={age}
              onChange={(event) => setAge(event.target.value)}
              placeholder='how old are you?'
            />
          </label>
          <div className={style.error}>{errorAge ? errorMessage : null}</div>
        </div>
        <input type="submit" value="Submit User Information" />
      </form>
    </div>
  );
}

export default UserInfo;
