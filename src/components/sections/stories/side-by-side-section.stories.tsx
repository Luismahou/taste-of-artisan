import React from 'react';
import { SideBySideSection } from '../side-by-side-section';

export default {
  title: 'Side by side section',
};

const sides = [
  {
    imgSrc: 'copertina.jpg',
    imgSrcset: 'copertina.jpg 100w',
    title: 'One',
    content: 'Content one',
    cta: {
      label: 'Learn more',
      href: '/somewhere',
    },
  },
  {
    imgSrc: 'kid-and-pig.jpg',
    imgSrcset: 'kid-and-pig.jpg 100w',
    title: 'Two',
    content: 'Content two',
    cta: {
      label: 'See more here',
      href: '/somewhere',
    },
  },
  {
    imgSrc: 'copertina.jpg',
    imgSrcset: 'copertina.jpg 100w',
    title: 'One',
    content: 'Content three',
  },
];

export const sideBySide = () => <SideBySideSection sides={sides} />;
