import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import {pageContents} from '../../data/dataStore';

const FAQ = () => (
  <Container>
    <Hero 
      titleText={pageContents.titleFaq}
      imageSource={pageContents.imageFaq}
    />
    <p>{pageContents.faqDescription}</p>
  </Container>
);

export default FAQ; 
