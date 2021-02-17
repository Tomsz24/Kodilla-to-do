import React from 'react';
import styles from './App.scss';
import List from '../List/List.js';
import { pageContents, listData } from '../../data/dataStore.js';

class App extends React.Component {
  render() {
    const { component, title, subtitle } = styles;

    return (
      <main className={component}>
        <h1 className={title}>{pageContents.title}</h1>
        <h2 className={subtitle}>{pageContents.subtitle}</h2>
        <List {...listData} />
      </main>
    );
  }
}

export default App;
