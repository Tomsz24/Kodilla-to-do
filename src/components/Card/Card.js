import React from 'react';
import PropTypes from 'prop-types';
import styles from './Card.scss';

class Card extends React.Component {

  static propTypes = {
    card: PropTypes.array,
    title: PropTypes.string,
  }
  render() {
    const { component } = styles;
    const { title } = this.props;
    return (
      <section className={component}>
        {title}
      </section>
    );
  }
}

export default Card;