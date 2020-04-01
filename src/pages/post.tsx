import React from 'react';
import { Head } from '../components/head/head';
import { Header } from '../components/header/header';
import { Footer } from '../components/footer/footer';

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
    publishedDate: string;
  };
  md: string;
};

export const Post = ({ global, header, footer, metadata, md }: PostProps) => {
  return (
    <div>
      <Head title={global.title} />
      <Header menuItems={header.menuItems} />
      <section className="py-8 sm:py-16 blog-container">
        <h1 className="text-2xl sm:text-4xl">{metadata.title}</h1>
        <h2 className="text-xl sm:text-2xl">{metadata.subtitle}</h2>
        <span className="text-xs sm:text-sm">
          Published {metadata.publishedDate}
        </span>
        <div dangerouslySetInnerHTML={{ __html: md }} />
      </section>
      <Footer {...footer} />
    </div>
  );
};
