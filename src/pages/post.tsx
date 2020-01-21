import React from 'react';
import { Header } from '../components/header/header';
import { Footer } from '../components/footer/footer';
import '../styles/index.css';

type PostProps = {
  metadata: {
    title: string;
    subtitle: string;
    publishedData: string;
  };
  md: string;
};

export const Post = ({ metadata, md }: PostProps) => {
  return (
    <div>
      <Header menuItems={[]} />
      <section className="py-8 sm:py-16 blog-container">
        <div>{JSON.stringify(metadata)}</div>
        <div dangerouslySetInnerHTML={{ __html: md }} />
      </section>
      <Footer
        firstColumnData={{ title: 'Website', links: [] }}
        secondColumnData={{ title: 'Blog', links: [] }}
      />
    </div>
  );
};

Post.getInitialProps = async (context: { query: { post_name: string } }) => {
  const classMap = {
    h5: 'text-2xl sm:text-4xl pt-8 sm:pt-12',
    h6: 'uppercase text-md sm:text-xl text-gray-600 pt-6 sm:pt-8',
    p: 'text-lg sm:text-xl pt-4 sm:pt-6',
  };
  const postName = context.query.post_name;
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
  const md: string = require(`../../data/posts/${postName}.md`).default;
  return {
    md: converter.makeHtml(md),
    metadata: converter.getMetadata(),
  };
};
