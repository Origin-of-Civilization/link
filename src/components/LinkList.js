import React from 'react';
import styles from '../styles/Home.module.css'


const LinkItem = ({ title, url }) => {
  return (
    <div className={styles.LinkItem}>
      <a href={url}>{title}</a>
    </div>
  );
};

export default LinkItem;