import React from 'react';
import { HeroSection } from '../hero-section';

export default {
  title: 'Hero section',
};

export const heroSection = () => (
  <HeroSection
    sectionData={{
      kind: 'hero',
      imgUrl:
        'http://joepapandrea.com.au/wp-content/uploads/cache/2016/03/joepapandrea_fitout/3232271715.jpg',
      title: 'Taste the difference',
      subtitle: '',
    }}
  />
);
