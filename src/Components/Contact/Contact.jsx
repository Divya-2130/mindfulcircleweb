import React from 'react'
import './Contact.css'
const Contact = () => {
  return (
    <div className='contact-background'>
        <h1 >Contact us</h1> 
        <div className='contact-container'>
          <form action="name">
            <input type="name" placeholder='your name' />
            <input type="email" placeholder='your email' />
            <input type="number" placeholder='your number' />
            <textarea placeholder='your message'></textarea>
          </form>
        </div>
        <button className='contact-button'>send</button>
        <div class="copy-right">
            <p>I am grateful <i class="fa-regular fa-handshake"></i> for the chance to collaborate
                with you and deliver a successful project </p>
        </div>
    </div>
  )
}

export default Contact