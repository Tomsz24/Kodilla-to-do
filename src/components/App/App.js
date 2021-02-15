import React from 'react';
import styles from './App.scss';
import Hero from '../Hero/Hero.js';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className={styles.component}>
          <h1 className={styles.title}>My first React app</h1>
          <h2 className={styles.subtitle}>Hello world!</h2>
        </div>
        <Hero></Hero>
      </React.Fragment>
    )
  }
}

export default App;
