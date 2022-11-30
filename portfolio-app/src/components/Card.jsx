import React from 'react'

const Card = ( { site: {link, image, description, title, iconOne, iconTwo, iconThree} }) => {
  return (
  <div className='websites'>
    <a href={link} target="_blank"><div className='card'>
      <div className="card-image">
        <img src={image} alt="bayshore screenshot" />
      </div>
      <div className="card-title center-text">{title}</div>
      <div className="card-body center-text">
        {description}
        <div className="icons">
          <img src={iconOne} alt='Tech icons' />
          <img src={iconTwo} alt='Tech icons' />
          <img src={iconThree} alt='Tech icons' />
        </div>
      </div>
    </div>
   </a>
  </div>
    
  )
}

export default Card