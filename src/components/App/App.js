import React from 'react';
import Home from '../Home/HomeContainer.js';
import Info from '../Info/Info.js';
import MainLayout from '../MainLayout/MainLayout.js';
import FAQ from '../FAQ/FAQ.js';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';
import styles from './App.scss';
import List from '../List/ListContainer.js';
import Search from '../Search/Search.js';

const App = () => (
  <BrowserRouter>
    <MainLayout>
      <AnimatedSwitch
        atEnter={{ opacity: 0 }}
        atLeave={{ opacity: 0 }}
        atActive={{ opacity: 1 }}
        className={styles.switchWrapper}
      >
        <Route exact path='/' component={Home} />
        <Route exact path='/info' component={Info} />
        <Route exact path='/faq' component={FAQ} />
        <Route exact path="/list/:id" component={List} />
        <Route exact path="/search/:address" component={Search} />
      </AnimatedSwitch>
    </MainLayout>
  </BrowserRouter>
);

export default App;