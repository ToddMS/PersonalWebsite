import React from 'react';
import ImageSlider from '../ImageSlider/ImageSlider';
import arrowIcon from '../../assets/icons/arrow.png';

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
    <section id="projects">
      <p className="section__text__p1">Browse My Recent</p>
      <h1 className="title">Projects</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          <div className="details-container color-container">
            <ImageSlider mediaUrls={workoutImages} />
            <h2 className="project-title">Context-Aware Fitness Mobile App</h2>
            <button
              className="btn btn-color-2 project-btn"
              onClick={() => window.open('https://github.com/ToddMS/Context-Aware-Fitness-Mobile-App', '_blank', 'noopener noreferrer')}
            >
              GitHub
            </button>
          </div>
          <div className="details-container color-container">
            <ImageSlider mediaUrls={sketchJSVideos} />
            <h2 className="project-title">Sketch.JS Canvas Project</h2>
            <button
              className="btn btn-color-2 project-btn"
              onClick={() => window.open('https://github.com/ToddMS/Creative-Coding', '_blank', 'noopener noreferrer')}
            >
              GitHub
            </button>
          </div>
          <div className="details-container color-container">
            <ImageSlider mediaUrls={recipeImages} />
            <h2 className="project-title">Shopping List and Recipe App</h2>
            <button
              className="btn btn-color-2 project-btn"
              onClick={() => window.open('https://github.com/ToddMS/Shopping-List-and-Recipe-App', '_blank', 'noopener noreferrer')}
            >
              GitHub
            </button>
          </div>
        </div>
      </div>
      <img src={arrowIcon} alt="Arrow icon" className="icon arrow" onClick={scrollToContact} />
    </section>
  );
};

export default Projects;
