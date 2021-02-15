import React from 'react';
import PropTypes from 'prop-types';
import styles from './Column.scss';

class Column extends React.Component {
  static propTypes = {
    subtitle: PropTypes.string
  }
  render() {
    const { component, title } = styles;
    const { subtitle } = this.props;
    return (
      <section className={component}>
        <h3 className={title}>{subtitle}</h3>
      </section>
    );
  }
}

export default Column;