import React, { useState } from 'react';
import App from './App'
import Blog from './Blog'
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom'
import I1 from './I1'
import Room from './Room'
import './Contact.css'
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setError('All fields are required.');
      return;
    }

    console.log('Form submitted:', formData);

    // Reset form
    setFormData({
      name: '',
      email: '',
      message: '',
    });
    setSubmitted(true);
    setError('');
  };

  return (
    <>
    <div className="top">
      <header>
        <div class="t1">
            <I1/>
            <h1><span>M</span>OTEL</h1>
        </div>
        <div class="t2">
          <ul className="u1">

            <li><Link to="/">HOME</Link></li>
            <li><Link to="/rooms">ROOMS</Link></li>
            <li><a href="" target='_blank'>PAGES</a></li>
            <li><Link to='/blogs' >BLOG</Link></li>
            <li><a href="">ABOUT US</a></li>
            <li><Link to="/contacts">CONTACT US</Link></li>
            <li><button className="b1"><Link to='/apps' target='_blank'><b>LOGIN NOW</b></Link></button></li>
            
          </ul>  
        </div>
      </header>
        </div>
    <div className="contact-page">
      
      
      <form onSubmit={handleSubmit}>
      <label id="head">Contact Us</label>
        <div id="n1">
        
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div id="n2">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div id="n3">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" id="submit">Send</button>
      </form>
      {submitted && <p className="p1">Thank you for your message!</p>}
      {error && <p className="error">{error}</p>}
    </div></>
  );
};

export default Contact;