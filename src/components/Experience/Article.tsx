import React from 'react';
import styles from './Article.module.css';

type ArticleProps = {
  icon: string;
  title: string;
  level: string;
};

const Article: React.FC<ArticleProps> = ({ icon, title, level }) => {
  return (
    <article className={styles.article}>
      <img src={icon} alt={`${title} Icon`} className={styles.articleIcon} />
      <div>
        <h3>{title}</h3>
        <p>{level}</p>
      </div>
    </article>
  );
};

export default Article;
