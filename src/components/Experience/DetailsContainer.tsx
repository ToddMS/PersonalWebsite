import React from 'react';
import Article from './Article';
import styles from './DetailsContainer.module.css';

type DetailsContainerProps = {
  title: string;
  articles: Array<{ icon: string; title: string; level: string }>;
};

const DetailsContainer: React.FC<DetailsContainerProps> = ({ title, articles }) => {
  return (
    <div className={styles.detailsContainer}>
      <h2 className={styles.experienceSubTitle}>{title}</h2>
      <div className={styles.articleContainer}>
        {articles.map((article, index) => (
          <Article key={index} icon={article.icon} title={article.title} level={article.level} />
        ))}
      </div>
    </div>
  );
};

export default DetailsContainer;
