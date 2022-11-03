import "./Card.css";

function Card({ object }) {
  return (
    <div className="card">
      {Object.keys(object).map((param, index) => (
        <div key={index}>{object[param]}</div>
      ))}
    </div>
  );
}

export default Card;
