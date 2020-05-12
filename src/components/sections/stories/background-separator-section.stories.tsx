import React from 'react';
import { BackgroundSeparatorSection } from '../background-separator-section';

export default {
  title: 'Background separator section',
};

export const backgroundSeparatorSection = () => (
  <BackgroundSeparatorSection
    imgSrc="meat-strip.jpg"
    imgSrcset="meat-strip.jpg 100w"
  />
);
