import React from 'react';
import PropTypes from 'prop-types';
import styles from './Hero.scss';
import ReactHtmlParser from 'react-html-parser';

const Hero = props => {
  const { component, title, image } = styles;
  const { titleText, imageSrc } = props;

  return (
    <header className={component}>
      <h2 className={title}>{ReactHtmlParser(titleText)}</h2>
      <img className={image} src={imageSrc} alt="space" />
    </header>
  );
};

Hero.propTypes = {
  titleText: PropTypes.node,
  imageSrc: PropTypes.string,
};
export default Hero;