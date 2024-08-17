import React from 'react';
import aboutPic from '../assets/profile/about-pic.png';
import arrowIcon from '../assets/icons/arrow.png'
import experienceIcon from '../assets/icons/experience.png'
import educationIcon from '../assets/icons/education.png'

const About: React.FC = () => {
  const scrollToExperience = () => {
    const experienceSection = document.getElementById('experience');
    if (experienceSection) {
      experienceSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about">
      <p className="section__text__p1">Get To Know More</p>
      <h1 className="title">About me</h1>
      <div className="section-container">
        <div className="section__pic-container">
        <img src={aboutPic} alt="Profile picture" className="about-pic" />
        </div>
        <div className="about-details-container">
          <div className="about-containers">
            <div className="details-container">
              <img src={experienceIcon} alt="Experience Icon" className="icon" />
              <h3>Experience</h3>
              <p>3+ Years <br /> Full Stack Developer</p>
            </div>
            <div className="details-container">
              <img src={educationIcon} alt="Education Icon" className="icon" />
              <h3>Education</h3>
              <p>B.Sc Bachelor's Degree <br /> University of Leicester</p>
            </div>
          </div>
          <div className="text-container">
            <p>Full Stack Engineer with 2+ years of professional experience, a strong understanding of Java, Angular, TypeScript, and JavaScript following a First Class Honours BSc in Computer Science from the University of Leicester. Working at Kyloe Partners, a leading Bullhorn Data Management company.</p>
            <br />
            <p>Outside of work, I enjoy keeping active, rowing for my local London rowing club, and maintaining a healthy but disciplined workout schedule at the gym. While also finding downtime with friends and family.</p>
          </div>
        </div>
      </div>
      <img
        src={arrowIcon}
        alt="Arrow icon"
        className="icon arrow"
        onClick={scrollToExperience} // Calls scrollToExperience on click
      />
    </section>
  );
};

export default About;
