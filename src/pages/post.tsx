import React from 'react';
import { Head } from '../components/head/head';
import { Header } from '../components/header/header';
import { Footer } from '../components/footer/footer';
import { parseISO, formatDistance } from 'date-fns';
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

Post.getInitialProps = async (context: { query: { post_name: string } }) => {
  const global = (await import('../../content/global.json')).default;
  const header = (await import('../../content/header.json')).default;
  const footer = (await import('../../content/footer.json')).default;

  const postName = context.query.post_name;
  const mdContent: string = (await import(`../../content/posts/${postName}.md`))
    .default;

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
  const md = converter.makeHtml(mdContent);
  const { publishedDate, ...otherMetadata } = converter.getMetadata();
  return {
    global,
    header,
    footer,
    md,
    metadata: {
      ...otherMetadata,
      publishedDate: formatDistance(parseISO(publishedDate), new Date(), {
        addSuffix: true,
      }),
    },
  };
};
