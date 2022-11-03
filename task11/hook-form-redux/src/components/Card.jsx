import './Card.css'

function Card({person: {name, age}}) {
  return (
    <div className="card">
      <div className="name">{name}</div>
      <div className="age">{age}</div>
    </div>
  )
}

export default Card