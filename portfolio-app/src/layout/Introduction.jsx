import React from 'react'
import Placeholder from '../assets/images/placeholder.png'

const Introduction = () => {
  return (
    <div className='container'>
      <div id="about" className='about'>
        <h4 className='h4-header'>My name is</h4>
        <br />
        <h1 className='font'>Frankie Adams</h1>
        <br />
        <h4 className='medium-header'>Front End Developer</h4>
        <div className="image">
          <img src={ Placeholder} alt='placeholder' className='head-shot center-img'/>
        </div>
        <div className="description">
          I am front end developer that specializes in React and Node.js. I have over 5 years of experience in web design and development including CMS' such as 
          Wordpress.
        </div>
      </div>
    </div>
  )
}

export default Introduction