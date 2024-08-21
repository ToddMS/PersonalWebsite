import React from 'react';

import styles from './Contact.module.css';
import emailIcon from '../../assets/icons/email.png';
import linkedInIcon from '../../assets/icons/linkedin.png';

const Contact: React.FC = () => {
  return (
    <section id="contact" className={styles.contact}>
      <p className={styles.sectionTextP1}>Get In Touch</p>
      <h1 className={styles.title}>Contact Me</h1>
      <div className={styles.contactInfoUpperContainer}>
        <div className={styles.contactInfoContainer}>
          <img src={emailIcon} alt="Email Icon" className={`${styles.icon} ${styles.contactIcon} ${styles.emailIcon}`} />
          <p><a href="mailto:toddmathewsandler@gmail.com">ToddMathewSandler@gmail.com</a></p>
        </div>
        <div className={styles.contactInfoContainer}>
          <img src={linkedInIcon} alt="LinkedIn Icon" className={`${styles.icon} ${styles.contactIcon}`} />
          <p><a href="https://www.linkedin.com/in/todd-sandler-5978a320b/" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
