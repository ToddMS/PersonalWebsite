import React from 'react';

import checkmarkIcon from '../assets/icons/checkmark.png';
import arrowIcon from '../assets/icons/arrow.png'

const Experience: React.FC = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="experience">
      <p className="section__text__p1">Explore My</p>
      <h1 className="title">Experience</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          <div className="details-container">
            <h2 className="experience-sub-title">Frontend Development</h2>
            <div className="article-container">
              <article>
                <img src={checkmarkIcon} alt="Experience Icon" className="icon" />
                <div>
                  <h3>HTML</h3>
                  <p>Experienced</p>
                </div>
              </article>
              <article>
                <img src={checkmarkIcon} alt="Experience Icon" className="icon" />
                <div>
                  <h3>CSS</h3>
                  <p>Experienced</p>
                </div>
              </article>
              <article>
                <img src={checkmarkIcon} alt="Experience Icon" className="icon" />
                <div>
                  <h3>JavaScript</h3>
                  <p>Experienced</p>
                </div>
              </article>
              <article>
                <img src={checkmarkIcon} alt="Experience Icon" className="icon" />
                <div>
                  <h3>Angular</h3>
                  <p>Experienced</p>
                </div>
              </article>
              <article>
                <img src={checkmarkIcon} alt="Experience Icon" className="icon" />
                <div>
                  <h3>TypeScript</h3>
                  <p>Experienced</p>
                </div>
              </article>
              <article>
                <img src={checkmarkIcon} alt="Experience Icon" className="icon" />
                <div>
                  <h3>React</h3>
                  <p>Experienced</p>
                </div>
              </article>
            </div>
          </div>
          <div className="details-container">
            <h2 className="experience-sub-title">Backend Development</h2>
            <div className="article-container">
              <article>
                <img src={checkmarkIcon} alt="Experience Icon" className="icon" />
                <div>
                  <h3>Java</h3>
                  <p>Experienced</p>
                </div>
              </article>
              <article>
                <img src={checkmarkIcon} alt="Experience Icon" className="icon" />
                <div>
                  <h3>Node JS</h3>
                  <p>Experienced</p>
                </div>
              </article>
              <article>
                <img src={checkmarkIcon} alt="Experience Icon" className="icon" />
                <div>
                  <h3>Micronaut</h3>
                  <p>Experienced</p>
                </div>
              </article>
              <article>
                <img src={checkmarkIcon} alt="Experience Icon" className="icon" />
                <div>
                  <h3>Spring Boot</h3>
                  <p>Experienced</p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
      <img src={arrowIcon} alt="Arrow icon" className="icon arrow" onClick={scrollToProjects} />
    </section>
  );
};

export default Experience;
