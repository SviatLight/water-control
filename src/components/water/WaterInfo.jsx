import style from "./WaterInfo.module.css";
import bottle1 from "../../images/bottle100.png";
import bottle2 from "../../images/bottle125.png";
import bottle3 from "../../images/bottle150.png";
import bottle4 from "../../images/bottle175.png";
import bottle5 from "../../images/bottle200.png";
import bottle6 from "../../images/bottle300.png";
import bottle7 from "../../images/bottle400.png";
import { useOutletContext } from "react-router-dom";
import Title from "../Base/Title/Title";

const WaterInfo = () => {
  const [currentUser, setCurrentUser] = useOutletContext();

  const setAmountWater = (amountWater) => {
    setCurrentUser((prevState) => ({ ...prevState, amountWater }));
  };

  const data = [
    { image: bottle1, title: "100ml", id: "100" },
    { image: bottle2, title: "125ml", id: "125" },
    { image: bottle3, title: "150ml", id: "150" },
    { image: bottle4, title: "175ml", id: "175" },
    { image: bottle5, title: "200ml", id: "200" },
    { image: bottle6, title: "300ml", id: "300" },
    { image: bottle7, title: "400ml", id: "400" },
  ];

  return (
    <div>
      <div className={style.container}>
        <Title titleText={"Glass measure"} />
        <div className={style.wrapper}>
          {data.map((item) => (
            <div
              key={item.id}
              className={
                currentUser.amountWater === item.id
                  ? `${style.block} ${style.active}`
                  : style.block
              }
              onClick={() => setAmountWater(item.id)}
            >
              <img src={item.image} alt={item.title} />
              <div className={style.title}>{item.title}</div>
            </div>
          ))}

          <div className={style.inputContainer}>
            <label className={style.water_info_label}>
              <h4>Enter</h4>
              <input
                className={style.waterCounter}
                type="number"
                min="1"
                onChange={(event) => setAmountWater(event.target.value)}
              />
              <h4>ml</h4>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaterInfo;
