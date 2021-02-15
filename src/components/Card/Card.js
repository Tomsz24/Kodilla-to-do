import React from 'react';
import PropTypes from 'prop-types';
import styles from './Card.scss';

class Card extends React.Component {

  static propTypes = {
    card: PropTypes.array,
  }
  render() {
    const { component } = styles;
    return (
      <section className={component}>
        {this.props.title}
      </section>
    );
  }
}

export default Card;