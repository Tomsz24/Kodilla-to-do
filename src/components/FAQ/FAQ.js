import React from 'react';
import Container from '../Container/Container.js';
import Hero from '../Hero/Hero.js';
import { faq } from '../../data/dataStore.js';

const FAQ = () => {
  const { image, content, title } = faq;
  return (
    <Container>
      <Hero imageSrc={image} />
      <h2>{title}</h2>
      <p>{content}</p>
    </Container>
  );
}

export default FAQ;