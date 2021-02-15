import React from 'react';
import styles from './Hero.scss';


const Hero = () => {
  const { component, title, image } = styles;
  return (
    <header className={component}>
      <h2 className={title}>Things to Do</h2>
      <img className={image} src="http://uploads.kodilla.com/bootcamp/fer/11.react/space.png" alt="space" />
    </header>
  );
}

export default Hero;