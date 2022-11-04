import { useState } from "react";
import "./Card.css";
import Dash from "../assets/dash-square.svg";

function Card({ object, type }) {
  // const className = "list " + type;
  const [cssClass, setCssClass] = useState("card");

  const handleMinimize = () => {
    setCssClass(cssClass + " fade");
  }

  const handleAnimationEnd = () => {
    setCssClass(cssClass + " none");
  }

  return (
    <div className={cssClass} onAnimationEnd={handleAnimationEnd}>
      {Object.keys(object).map((param, index) => (
        <div key={index}>{object[param]}</div>
      ))}
      {type === "errors" && <img src={Dash} alt="Minimize" className="icon" onClick={handleMinimize}/>}
    </div>
  );
}

export default Card;
