import React from 'react';
import Head from 'next/head';
import { Header } from '../components/header/header';
import { Footer } from '../components/footer/footer';
import { Section } from '../components/sections/section';
import '../styles/index.css';

type MenuItemsData = React.ComponentProps<typeof Header>['menuItems'];
type SectionData = React.ComponentProps<typeof Section>['sectionData'];
type IndexProps = {
  title: string;
  menuItems: MenuItemsData;
  sectionDatas: readonly SectionData[];
  footer: {
    firstColumnData: React.ComponentProps<typeof Footer>['firstColumnData'];
    secondColumnData: React.ComponentProps<typeof Footer>['secondColumnData'];
  };
};

export const Index = ({
  title,
  menuItems,
  sectionDatas,
  footer,
}: IndexProps) => (
  <div>
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
      <link
        href="https://fonts.googleapis.com/css?family=IBM+Plex+Sans&display=swap"
        rel="stylesheet"
      />
    </Head>
    <Header menuItems={menuItems} />
    <div>
      {sectionDatas.map(sectionData => (
        <Section sectionData={sectionData} />
      ))}
    </div>
    <Footer {...footer} />
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
  footer: {
    firstColumnData: {
      title: 'Taste of Artisan',
      links: [
        {
          label: 'How do we source our meat',
          href: '/how-do-we-source-our-meat',
        },
        { label: 'Meet the butcher', href: '/meet-the-buther' },
        { label: 'Free delivery', href: '/free-delivery' },
      ],
    },
    secondColumnData: {
      title: 'Blog',
      links: [
        {
          label: 'How to make chorizos at home',
          href: '/blog/how-to-make-chorizos',
        },
        { label: 'Making salami at home', href: '/blog/making-salami-at-home' },
      ],
    },
  },
});
