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
      {/*
       * Preconnects to where font assets really are. It saves some precious
       * time with low speed connections.
       */}
      <link href="https://fonts.gstatic.com" rel="preconnect" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css?family=IBM+Plex+Sans&display=swap"
        rel="stylesheet"
      />
    </Head>
    <Header menuItems={menuItems} />
    <div>
      {sectionDatas.map((sectionData, index) => (
        <Section
          key={`${sectionData.kind}-${index}`}
          sectionData={sectionData}
        />
      ))}
    </div>
    <Footer {...footer} />
  </div>
);

Index.getInitialProps = () => ({
  title: 'Taste of Artisan',
  menuItems: [
    {
      label: 'Our products',
      href: '/our-products',
    },
    {
      label: 'About us',
      href: '/about-us',
    },
  ],
  sectionDatas: [
    {
      kind: 'hero',
      // imgUrl: 'https://image.shutterstock.com/z/stock-photo-happy-asian-man-is-eating-the-delicious-favorite-sausage-he-cooked-himself-1372880834.jpg',
      // imgUrl: 'https://image.shutterstock.com/image-photo/handsome-man-eating-tasty-burger-600w-1354479809.jpg',
      imgUrl:
        'http://joepapandrea.com.au/wp-content/uploads/cache/2016/03/joepapandrea_fitout/3232271715.jpg',
      title: 'Taste the difference',
      subtitle: 'Real food for real people',
    },
    {
      kind: 'title',
      title: 'Real food with 0 nasties',
      subtitle:
        'None of our products contain preservatives and are made fresh daily with the best ingredients',
    },
    {
      kind: 'side-by-side',
      cells: [
        {
          imgUrl:
            'https://healthy-kids.com.au/wp-content/uploads/2013/10/familydinner1.jpg',
          title: 'The welfare of animals is our priority',
          content: '',
        },
        {
          imgUrl:
            'https://healthy-kids.com.au/wp-content/uploads/2013/10/familydinner1.jpg',
          title: 'Ancestors traditions to your palate',
          content: '',
        },
        {
          imgUrl:
            'https://healthy-kids.com.au/wp-content/uploads/2013/10/familydinner1.jpg',
          title: 'Delicious meals for the whole family',
          content: '',
        },
      ],
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
