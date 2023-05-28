import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Link } from "react-router-dom";

const serviceID = "service_zylwtkp"
const templateID = "template_1dqmty6";
const public_key = "6rjiuNxerGvh4hZ_f";

const Contact = () => {

  // Style because I could not get sass to work
  const inputText = {
    width: "90%",
    padding: "12px 20px",
    margin: "8px 0",
    display: "inline-block",
    border: "1px solid #ccc",
    borderRadius: "4px",
    boxSizing: "border-box"
  };

  const inputSubmit = {
    width: "90%",
    backgroundColor: "#316cc5",
    color: "white",
    padding: "14px 20px",
    margin: "8px 0",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer"
  }

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const submit = () => {
    if (!isValidEmail(email))  {
      alert('Invalid Email');
    }
    else if (name && email && message) {
      const serviceId = serviceID;
      const templateId = templateID;
      const userId = public_key;
      const templateParams = {
          name,
          email,
          message
      };

      emailjs.send(serviceId, templateId, templateParams, userId)
          .then(response => console.log(response))
          .then(error => console.log(error));

      setName('');
      setEmail('');
      setMessage('');
      alert('Thank you for your message, we will be in touch in no time!')
  }
  else {
      alert('Please fill in all fields.');
  }
  }

  const isValidEmail = email => {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
  };

  

  return (
      <div id="contact-form" className='Contact'>
        <h1>Reach out to me</h1>
        <h4>mcmurtraycolin@gmail.com</h4>
        <button onClick={() => window.location.href = 'mailto:mcmurtraycolin@gmail.com'} style={inputSubmit}>To eMail me from your default eMail application</button>
        <h2>Or you can reach out to me from here!</h2>
        <h4>Just fill out your:</h4>
        <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} style={inputText}/>
        <input type="email" placeholder="eMail address" value={email} onChange={e => setEmail(e.target.value)} style={inputText}/>
        <textarea placeholder="Message" value={message} onChange={e => setMessage(e.target.value)} style={inputText}></textarea>
        <button onClick={submit} style={inputSubmit}>Send message</button>
      </div>
  );
};

export default Contact;