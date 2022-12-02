import React, { useState, useEffect } from 'react'
import emailjs from 'emailjs-com';

const Contact = () => {
const [sent, setSent] = useState(false)

const sendEmail = (e) => {
  e.preventDefault();
  
  setSent(true);
  emailjs.sendForm(
    'service_mkhp5g8',
    'template_wrltd6p',
    e.target,
    'user_5ibgWMWYaAQHktdF6vMg9',
  )
    .then((result) => {
      console.log(result.text);
    },
    (error) => {
      console.log(error.text);
    }
    )
}

  return (
    <div className='container' data-aos="fade-down">
      <div className='contact-section'>
        <h3 className="large-header center-text">Contact Me</h3>
        <form onSubmit={sendEmail} id='contactForm' >
          <div className="form-group-2">
            <input type='text' className='input-field' name="firstName" placeholder='First Name...'></input>
            <input type='text' className='input-field' name="lastName" placeholder='Last Name...'></input>
          </div>
          <div className="form-group-2">
            <input type='email' className='input-field' name="email" placeholder='Email...'></input>
            <input type='phone' className='input-field' name="phoneNumber" placeholder='Phone Number...'></input>
          </div>
          <div className="form-group-1">
            <textarea name='message' className='text-box' placeholder="How Can I help you..."></textarea>
          </div>
          <button type="submit" className='submit-btn' id="submitBtn">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Contact