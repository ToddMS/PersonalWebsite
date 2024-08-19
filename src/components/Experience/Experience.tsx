import React from 'react';
import styles from './Experience.module.css';
import DetailsContainer from './DetailsContainer';

import checkmarkIcon from '../../assets/icons/checkmark.png';
import arrowIcon from '../../assets/icons/arrow.png';

const Experience: React.FC = () => {
  const frontendArticles = [
    { icon: checkmarkIcon, title: 'HTML', level: 'Experienced' },
    { icon: checkmarkIcon, title: 'CSS', level: 'Experienced' },
    { icon: checkmarkIcon, title: 'JavaScript', level: 'Experienced' },
    { icon: checkmarkIcon, title: 'Angular', level: 'Experienced' },
    { icon: checkmarkIcon, title: 'TypeScript', level: 'Experienced' },
    { icon: checkmarkIcon, title: 'React', level: 'Experienced' },
  ];

  const backendArticles = [
    { icon: checkmarkIcon, title: 'Java', level: 'Experienced' },
    { icon: checkmarkIcon, title: 'Node JS', level: 'Experienced' },
    { icon: checkmarkIcon, title: 'Micronaut', level: 'Experienced' },
    { icon: checkmarkIcon, title: 'Spring Boot', level: 'Experienced' },
  ];

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id='experience' className={styles.experience}>
      <p className={styles.sectionTextP1}>Explore My</p>
      <h1 className={styles.title}>Experience</h1>
      <div className={styles.experienceDetailsContainer}>
        <div className={styles.aboutContainers}>
          <DetailsContainer title="Frontend Development" articles={frontendArticles} />
          <DetailsContainer title="Backend Development" articles={backendArticles} />
        </div>
      </div>
      <img src={arrowIcon} alt="Arrow icon" className={`${styles.icon} ${styles.arrow}`} onClick={scrollToProjects} />
    </section>
  );
};

export default Experience;
