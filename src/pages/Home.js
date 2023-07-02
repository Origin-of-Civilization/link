import React from "react";
// import LinkList from "../components/LinkList";
// import linksData from "../data/links";
// import styles from "../styles/App.css";
import styles from '../styles/Home.module.css'


function Home() {
  return (
    <div >
      <div className={styles.HomeTitle}>
        <h1>Welcome to Origin of Civilization</h1>
      </div>
      <div className={styles.HomeDecs}>
        <p> A Game Build on MultiChain, and Provide a localized game experience for players of different languages.</p>
      </div>
    </div>
  );
}

export default Home;