import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import Icon from '../Icon/Icon.js';
import style from './Header.scss';
import Container from '../Container/Container.js';
import { faq, info } from '../../data/dataStore.js';
import Search from '../Search/Search.js';

class Header extends React.Component {
  render() {
    const { component, wrapper, logo } = style;
    return (
      <header className={component}>
        <Container className={wrapper}>
          <div className={wrapper}>
            <Link className={logo} to="/">
              <Icon name="coffee" />
            </Link>
            <nav>
              <NavLink exact to="/" activeClassName='active'>Home</NavLink>
              <NavLink exact to="/info" activeClassName='active'>{info.title}</NavLink>
              <NavLink exact to="/faq" activeClassName='active'>{faq.title}</NavLink>
            </nav>
          </div>
        </Container>
        <Search />
      </header>
    );
  }
}

export default Header;