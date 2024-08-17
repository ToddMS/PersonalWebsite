import React from 'react';

import emailIcon from '../assets/icons/email.png';
import linkedInIcon from '../assets/icons/linkedin.png';

const Contact: React.FC = () => {
  return (
    <section id="contact">
      <p className="section__text__p1">Get In Touch</p>
      <h1 className="title">Contact Me</h1>
      <div className="contact-info-upper-container">
        <div className="contact-info-container">
          <img src={emailIcon} alt="Email Icon" className="icon contact-icon email-icon" />
          <p><a href="mailto:toddmathewsandler@gmail.com">ToddMathewSandler@gmail.com</a></p>
        </div>
        <div className="contact-info-container">
          <img src={linkedInIcon} alt="LinkedIn Icon" className="icon contact-icon" />
          <p><a href="https://www.linkedin.com/in/todd-sandler-5978a320b/" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
