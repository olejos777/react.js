import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import {pageContents} from '../../data/dataStore';

const Info = () => (
  <Container>
    <Hero 
      titleText={pageContents.titleInfo}
      imageSource={pageContents.imageInfo}
    />
    <p>{pageContents.faqDescription}</p>
  </Container>
);

export default Info;