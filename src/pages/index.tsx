import React from 'react';
import Head from 'next/head';
import { Header } from '../components/header/header';
import { Section } from '../components/sections/section';
import '../styles/index.css';

type MenuItemsData = React.ComponentProps<typeof Header>['menuItems'];
type SectionData = React.ComponentProps<typeof Section>['sectionData'];
type IndexProps = {
  title: string;
  menuItems: MenuItemsData;
  sectionDatas: readonly SectionData[];
};

export const Index = ({ title, menuItems, sectionDatas }: IndexProps) => (
  <div>
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
      <link
        href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap"
        rel="stylesheet"
      />
    </Head>
    <Header menuItems={menuItems} />
    <div>
      {sectionDatas.map(sectionData => (
        <Section sectionData={sectionData} />
      ))}
    </div>
    <footer>Footer</footer>
  </div>
);

Index.getInitialProps = () => ({
  title: 'Taste of Artisan',
  menuItems: [
    {
      label: 'Menu item one',
      href: '/',
    },
    {
      label: 'Meet the butcher',
      href: '/two',
    },
    {
      label: 'About us',
      href: '/three',
    },
  ],
  sectionDatas: [
    {
      kind: 'hero',
      imgUrl:
        'http://joepapandrea.com.au/wp-content/uploads/cache/2016/03/joepapandrea_fitout/3232271715.jpg',
      title: 'Taste the difference',
      subtitle: 'Real food for real people',
    },
    {
      kind: 'grid',
    },
  ],
});
