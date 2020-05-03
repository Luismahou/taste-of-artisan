import React from 'react';
import { storiesOf } from '@storybook/react';
import { Header } from '../header';

const MENU_ITEMS = [
  { label: 'About us', href: '/about-us' },
  { label: 'Free delivery', href: '/free-delivery' },
  { label: 'Contact us', href: '/contact-us' },
];

storiesOf('Header', module).add('interactive', () => {
  return (
    <>
      <Header logoSrc="/logo.png" menuItems={MENU_ITEMS} />
      <div className="h-screen bg-muddy-waters" />
    </>
  );
});
