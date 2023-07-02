import React from 'react';
import LinkItem from "./components/LinkList"
import links from './data/links';
import Home from './pages/Home';
// import styles from './styles/App.css'
import styles from './styles/Home.module.css'

const App = () => {
  return (
    <div className={styles.container}>

      <Home/>
      <div >
        {links.map((link, index) => (
          <LinkItem key={index} title={link.title} url={link.url} />
        ))}
      </div>
    </div>

  );
};

export default App;