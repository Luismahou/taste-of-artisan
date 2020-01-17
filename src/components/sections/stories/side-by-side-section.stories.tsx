import React from 'react';
import { SideBySideSection } from '../side-by-side-section';

export default {
  title: 'Side by side section',
};

const cells = [
  {
    imgUrl:
      'https://healthy-kids.com.au/wp-content/uploads/2013/10/familydinner1.jpg',
    title: 'One',
    content: 'Content one',
    cta: {
      ctaLabel: 'cta',
      ctaUrl: '',
    },
  },
  {
    imgUrl:
      'https://healthy-kids.com.au/wp-content/uploads/2013/10/familydinner1.jpg',
    title: 'Two',
    content: 'Content two',
    cta: {
      ctaLabel: 'cta',
      ctaUrl: '',
    },
  },
  {
    imgUrl:
      'https://healthy-kids.com.au/wp-content/uploads/2013/10/familydinner1.jpg',
    title: 'One',
    content: 'Content three',
  },
];

export const sideBySide = () => <SideBySideSection cells={cells} />;
