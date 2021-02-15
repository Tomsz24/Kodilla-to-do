import React from 'react';
import PropTypes from 'prop-types';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import Column from '../Column/Column';

class List extends React.Component {
  static propTypes = {
    title: PropTypes.node,
    children: PropTypes.node,
    image: PropTypes.string,
  }
  static defaultProps = {
    children: <p>I can do all the things!!!</p>,
  }
  render() {
    const { component, description, columns } = styles;
    const { title, children, image } = this.props;
    return (
      <section className={component}>
        <Hero titleText={title} imageSrc={image}></Hero>
        <div className={description}>
          {children}
        </div>
        <div className={columns}>
          <Column subtitle={"siema"}></Column>
          <Column subtitle={"czesc"}></Column>
          <Column subtitle={"elo"}></Column>
        </div>
      </section>
    );
  }
}

export default List;