import React from 'react'

const Card = (props) => {
  return (
    <div className="cards">
      <img
        src={props.img}
        alt=""
      />

      <h1>{props.user},{props.age}</h1>
      <p>Lorem ipsum dolor sit amet.</p>
      <button>view profile</button>
    </div>
  )
}

export default Card