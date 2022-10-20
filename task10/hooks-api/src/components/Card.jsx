import './Card.css'

import Type from "./Type"

function Card({object}) {

  return (
    <div className='card'>
      <div className="card-id">#{object.id}</div>
      <div className="card-image">
        <img className='image' src={object.image} alt="pokemon image"/>
      </div>
      <div className="card-body">
        <h3 className='card-title'>{object.name}</h3>
        <div className="card-tags">
          {object.types.map(type => <Type key={type.name} type={type}/>)}
        </div>
        <div className="card-details">
          <p>Extra details:</p>
          <ul className='details'>
            {object.details.map(detail => <li key={detail.name}>{detail.name}: {detail.value}</li>)}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Card