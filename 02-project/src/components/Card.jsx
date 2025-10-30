import React from 'react'

const Card = (props) => {
  return (
       <div className='card'>
        <img src={props.img} alt="broken image" />
            <h1>{props.user},{props.age}</h1>
            <h2>SDE</h2>
            <p>very enthusiastic & deterministic person</p>
            <button id="btn">view Profile</button>
            
          </div>
  )
}

export default Card
