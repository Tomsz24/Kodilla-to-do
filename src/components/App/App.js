import React from 'react';
import styles from './App.scss';
import List from '../List/List.js'

class App extends React.Component {
  render() {
    const { component, title, subtitle } = styles;
    const url = "http://uploads.kodilla.com/bootcamp/fer/11.react/space.png";
    return (
      <main className={component}>
        <h1 className={title}>My first React app</h1>
        <h2 className={subtitle}>Hello world!</h2>
        <List title={['Things to do ', <sup key='1'>soon!</sup>]} image={url}>
        </List>
      </main>
    )
  }
}

export default App;
