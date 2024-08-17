import React from 'react';

import styles from './Experience.module.css';

import checkmarkIcon from '../../assets/icons/checkmark.png';
import arrowIcon from '../../assets/icons/arrow.png';

const Experience: React.FC = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="experience" className={styles.experience}>
      <p className={styles.sectionTextP1}>Explore My</p>
      <h1 className={styles.title}>Experience</h1>
      <div className={styles.experienceDetailsContainer}>
        <div className={styles.aboutContainers}>
          <div className={styles.detailsContainer}>
            <h2 className={styles.experienceSubTitle}>Frontend Development</h2>
            <div className={styles.articleContainer}>
              <article className={styles.article}>
                <img src={checkmarkIcon} alt="Experience Icon" className={styles.articleIcon} />
                <div>
                  <h3>HTML</h3>
                  <p>Experienced</p>
                </div>
              </article>
              <article className={styles.article}>
                <img src={checkmarkIcon} alt="Experience Icon" className={styles.articleIcon} />
                <div>
                  <h3>CSS</h3>
                  <p>Experienced</p>
                </div>
              </article>
              <article className={styles.article}>
                <img src={checkmarkIcon} alt="Experience Icon" className={styles.articleIcon} />
                <div>
                  <h3>JavaScript</h3>
                  <p>Experienced</p>
                </div>
              </article>
              <article className={styles.article}>
                <img src={checkmarkIcon} alt="Experience Icon" className={styles.articleIcon} />
                <div>
                  <h3>Angular</h3>
                  <p>Experienced</p>
                </div>
              </article>
              <article className={styles.article}>
                <img src={checkmarkIcon} alt="Experience Icon" className={styles.articleIcon} />
                <div>
                  <h3>TypeScript</h3>
                  <p>Experienced</p>
                </div>
              </article>
              <article className={styles.article}>
                <img src={checkmarkIcon} alt="Experience Icon" className={styles.articleIcon} />
                <div>
                  <h3>React</h3>
                  <p>Experienced</p>
                </div>
              </article>
            </div>
          </div>
          <div className={styles.detailsContainer}>
            <h2 className={styles.experienceSubTitle}>Backend Development</h2>
            <div className={styles.articleContainer}>
              <article className={styles.article}>
                <img src={checkmarkIcon} alt="Experience Icon" className={styles.articleIcon} />
                <div>
                  <h3>Java</h3>
                  <p>Experienced</p>
                </div>
              </article>
              <article className={styles.article}>
                <img src={checkmarkIcon} alt="Experience Icon" className={styles.articleIcon} />
                <div>
                  <h3>Node JS</h3>
                  <p>Experienced</p>
                </div>
              </article>
              <article className={styles.article}>
                <img src={checkmarkIcon} alt="Experience Icon" className={styles.articleIcon} />
                <div>
                  <h3>Micronaut</h3>
                  <p>Experienced</p>
                </div>
              </article>
              <article className={styles.article}>
                <img src={checkmarkIcon} alt="Experience Icon" className={styles.articleIcon} />
                <div>
                  <h3>Spring Boot</h3>
                  <p>Experienced</p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
      <img src={arrowIcon} alt="Arrow icon" className={`${styles.icon} ${styles.arrow}`} onClick={scrollToProjects} />
    </section>
  );
};

export default Experience;
