import React from 'react';
import propTypes from 'prop-types';
import styles from './Container.scss';

const Container = props => {
  const { children } = props;
  return (
    <div className={styles.component}>
      {children}
    </div>
  );
};

Container.propTypes = {
  children: propTypes.node,
};
export default Container;