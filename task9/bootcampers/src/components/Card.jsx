import React from 'react'
import './Card.css'

function handleHover(event){
  event.target.value = "hi"
}

function Card({camper}) {
  return (
    <div className='card'>{camper}</div>
  )
}

export default Card