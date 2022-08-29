import { useState } from "react";
import style from "./UserInfo.module.css";
import { useNavigate } from "react-router-dom";

const UserInfo = () => {
  const [weight, setWeight] = useState("");
  const [age, setAge] = useState("");
  const [errorWeight, setErrorWeight] = useState(false);
  const [errorAge, setErrorAge] = useState(false);
  const errorMessage = "please fill out this field";
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrorWeight(!weight);
    setErrorAge(!age);
    if (!weight || !age) {
      return;
    }
    console.log(`your weight is ${weight}`);
    console.log(`your age is ${age}`);
    localStorage.setItem("weight", weight);
    navigate("/registration/water");
  };

  return (
    <div className={style.wrapper}>
      <div className={style.header}>
        {" "}
        <h1>Registration</h1>{" "}
      </div>
      <form className="d-grid gap-4 col-5 mx-auto" onSubmit={handleSubmit}>
        <div className={style.block}>
          <label>
            <p>Enter your age:</p>
            <input
              type="number"
              min="1"
              value={age}
              onChange={(event) => setAge(event.target.value)}
              placeholder="how old are you?"
            />
          </label>
          <div className={style.error}>{errorAge ? errorMessage : null}</div>
        </div>

        <div className={style.block}>
          <label>
            {" "}
            <p>Enter your weight:</p>
            <input
              type="number"
              min="1"
              value={weight}
              onChange={(event) => setWeight(event.target.value)}
              placeholder="go ahead and lie"
            />
          </label>
          <div className={style.error}>{errorWeight ? errorMessage : null}</div>
        </div>

        <div className="d-grid gap-2 col-6 mx-auto">
          <button
            className="btn btn-primary btn-lg btn-block"
            onClick={handleSubmit}
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserInfo;
