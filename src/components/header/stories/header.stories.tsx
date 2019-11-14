import React from 'react';
import { storiesOf } from '@storybook/react';
import { Header } from '../header';

const MENU_ITEMS = [
  { label: 'About us', slug: '/about-us' },
  { label: 'Free delivery', slug: '/free-delivery' },
  { label: 'Contact us', slug: '/contact-us' },
];

storiesOf('Header', module).add('interactive', () => {
  return (
    <>
      <Header menuItems={MENU_ITEMS} />
      <div className="h-screen" />
    </>
  );
});
