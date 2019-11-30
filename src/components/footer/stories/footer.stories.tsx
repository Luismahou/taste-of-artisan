import React from 'react';
import { storiesOf } from '@storybook/react';
import { Footer } from '../footer';

const FIRST_COLUMN = {
  title: 'Website',
  links: [
    { label: 'About us', href: '/about-us' },
    { label: 'Meet the butcher', href: '/meet-the-butcher' },
  ],
};
const SECOND_COLUMN = {
  title: 'Blog',
  links: [
    { label: 'How to make chorizos', href: '/blog/how-to-make-chorizos' },
    { label: 'Making salami at home', href: '/blog/making-salami-at-home' },
  ],
};

storiesOf('Footer', module).add('interactive', () => (
  <Footer firstColumnData={FIRST_COLUMN} secondColumnData={SECOND_COLUMN} />
));
