import React from 'react';
import Container from '../Container/Container.js';
import Hero from '../Hero/Hero.js';
import { info } from '../../data/dataStore.js'

const Info = () => {
  const { title, image, content } = info;
  return (
    <Container>
      <Hero imageSrc={image} />
      <h2>{title}</h2>
      <p>{content}</p>
    </Container>
  );
}

export default Info;
