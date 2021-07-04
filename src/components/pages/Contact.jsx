import React, { useState } from 'react';
import style from './Contact.css';

const Contact = () => {

  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('hello');
    fetch('http://localhost:5000/api/email', {
      method: 'POST',
      cache: 'no-cache',
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({ message, email })
    }).then(response => {
      return response.json();
    }).then(data => {
      console.log(data);
    }).catch(err => {
      console.log(err);
    });
  };

  return (
    <div className={style.contactPageContainer}>
      <h2>Contact me </h2>
      <div className={style.justinInfo}>
        <img src="/assets/justinheadshot.jpg" alt="Justin Campbell" />
        <p>
          Hello! My name is Justin Campbell I'm the owner and operator of Fact
          Checked Media productions. Thank you for taking the time to visit my
          website. I'd love to set up a time to chat and see if I can help you
          bring your podcast to the world! Please shoot me an email at <span className={style.highlight}>factcheckedmediaproductions@gmail.com </span> or fill out the form below!
        </p>
      </div>
      <div className={style.contactForm}>
        <form>
          <label htmlFor="email">
            <h2>Email</h2>
          </label>
          <input type="text" name="email" value={email} placeholder="example@mail.com" onChange={(e) => setEmail(e.target.value)}/>
          <label htmlFor="text">
            <h2>Message</h2>
          </label>
          <textarea name="text" value={message} placeholder="your message here" rows="6" cols="35" onChange={(e) => setMessage(e.target.value)}/>
          <button onClick={(e) => handleFormSubmit(e) }>SUBMIT</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
