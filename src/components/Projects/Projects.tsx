import React from 'react';
import arrowIcon from '../../assets/icons/arrow.png';
import Project from './Project'

import styles from './Projects.module.css';

import sketchJS1 from '../../assets/sketchJS/video1.mp4';
import sketchJS2 from '../../assets/sketchJS/video2.mp4';
import sketchJS3 from '../../assets/sketchJS/video3.mp4';
import sketchJS4 from '../../assets/sketchJS/video4.mp4';
import sketchJS5 from '../../assets/sketchJS/video5.mp4';

import recipe1 from '../../assets/recipe app/picture1.png';
import recipe2 from '../../assets/recipe app/picture2.png';
import recipe3 from '../../assets/recipe app/picture3.png';

import workout1 from '../../assets/workout app/picture1.png';
import workout2 from '../../assets/workout app/picture2.png';
import workout3 from '../../assets/workout app/picture3.png';
import workout4 from '../../assets/workout app/picture4.png';
import workout5 from '../../assets/workout app/picture5.png';
import workout6 from '../../assets/workout app/picture6.png';
import workout7 from '../../assets/workout app/picture7.png';
import workout8 from '../../assets/workout app/picture8.png';

const sketchJSVideos = [
  sketchJS1, sketchJS2, sketchJS3, sketchJS4, sketchJS5
];

const recipeImages = [recipe1, recipe2, recipe3];

const workoutImages = [
  workout1, workout2, workout3, workout4, workout5, workout6, workout7, workout8
];

const Projects: React.FC = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="projects" className={styles.projects}>
      <p className={styles.sectionTextP1}>Browse My Recent</p>
      <h1 className={styles.title}>Projects</h1>
      <div className={styles.experienceDetailsContainer}>
        <div className={styles.aboutContainers}>
          <Project name='Context-Aware Weight Training Assistant' media={workoutImages} gitHubUrl='This is a url' />
          <Project name='Creative SketchJS Designs' media={sketchJSVideos} gitHubUrl='This is a url' />
          <Project name='Food Shopping and Recipe web app' media={recipeImages} gitHubUrl='// https://github.com/ToddMS/Context-Aware-Fitness-Mobile-App' />
        </div>
      </div>
      <img src={arrowIcon} alt="Arrow icon" className={`${styles.icon} ${styles.arrow}`} onClick={scrollToContact} />
    </section>
  );
};

export default Projects;
