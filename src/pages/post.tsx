import React from 'react';
import Head from 'next/head';
import { Header } from '../components/header/header';
import { Footer } from '../components/footer/footer';
import '../styles/index.css';

type MenuItemsData = React.ComponentProps<typeof Header>['menuItems'];

type PostProps = {
  global: {
    title: string;
  };
  header: {
    menuItems: MenuItemsData;
  };
  footer: {
    firstColumnData: React.ComponentProps<typeof Footer>['firstColumnData'];
    secondColumnData: React.ComponentProps<typeof Footer>['secondColumnData'];
  };
  metadata: {
    title: string;
    subtitle: string;
    publishedData: string;
  };
  md: string;
};

export const Post = ({ global, header, footer, metadata, md }: PostProps) => {
  return (
    <div>
      <Head>
        <title>{global.title}</title>
        <link rel="icon" href="/favicon.ico" />
        {/*
         * Preconnects to where font assets really are. It saves some precious
         * time with low speed connections.
         */}
        <link
          href="https://fonts.gstatic.com"
          rel="preconnect"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css?family=IBM+Plex+Sans&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header menuItems={header.menuItems} />
      <section className="py-8 sm:py-16 blog-container">
        <div>{JSON.stringify(metadata)}</div>
        <div dangerouslySetInnerHTML={{ __html: md }} />
      </section>
      <Footer {...footer} />
    </div>
  );
};

Post.getInitialProps = async (context: { query: { post_name: string } }) => {
  const global = (await import('../../data/global.json')).default;
  const header = (await import('../../data/header.json')).default;
  const footer = (await import('../../data/footer.json')).default;

  const postName = context.query.post_name;
  const md: string = (await import(`../../data/posts/${postName}.md`)).default;

  const classMap = {
    h5: 'text-2xl sm:text-4xl pt-8 sm:pt-12',
    h6: 'uppercase text-md sm:text-xl text-gray-600 pt-6 sm:pt-8',
    p: 'text-lg sm:text-xl pt-4 sm:pt-6',
    img: 'py-8',
  };
  const showdown = require('showdown');
  const bindings = Object.entries(classMap).map(([key, value]) => ({
    type: 'output',
    regex: new RegExp(`<${key}(.*)>`, 'g'),
    replace: `<${key} class="${value}" $1>`,
  }));
  const converter = new showdown.Converter({
    metadata: true,
    noHeaderId: true,
    headerLevelStart: 5,
    extensions: [...bindings],
  });
  return {
    global,
    header,
    footer,
    md: converter.makeHtml(md),
    metadata: converter.getMetadata(),
  };
};
