import React from 'react';
import { SideBySideSection } from '../side-by-side-section';

export default {
  title: 'Side by side section',
};

const cells = [
  {
    imgSrcset: 'copertina.jpg 100w',
    title: 'One',
    content: 'Content one',
    cta: {
      label: 'Learn more',
      href: '/somewhere',
    },
  },
  {
    imgSrcset: 'kid-and-pig.jpg 100w',
    title: 'Two',
    content: 'Content two',
    cta: {
      label: 'See more here',
      href: '/somewhere',
    },
  },
  {
    imgSrcset: 'copertina.jpg 100w',
    title: 'One',
    content: 'Content three',
  },
];

export const sideBySide = () => <SideBySideSection cells={cells} />;
