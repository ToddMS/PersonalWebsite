import React from 'react';
import ImageSlider from './ImageSlider';
import styles from './Project.module.css';

interface ProjectProps {
  name: string;
  media: string[];
  gitHubUrl: string;
};

const Project: React.FC<ProjectProps> = ({name, media, gitHubUrl}: ProjectProps) => {
  return (
    <div className={`${styles.detailsContainer} ${styles.colorContainer}`}>
      <ImageSlider mediaUrls={media} />
      <h2 className={`${styles.experienceSubTitle} ${styles.projectTitle}`}>{name}</h2>
      <div className={styles.btnContainer}>
        <button
          className={`${styles.btn} ${styles.btnColor2} ${styles.projectBtn}`}
          onClick={() => window.open(gitHubUrl, '_blank', 'noopener noreferrer')}>
            GitHub
          </button>
        </div>
    </div>
  );
};

export default Project;
