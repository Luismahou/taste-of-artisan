import React from 'react';
import { Converter } from 'showdown';
import { parseISO, formatDistance } from 'date-fns';
import global from '../../../content/global.json';
import { Head } from '../../components/head/head';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import { loadHeader } from '../../content-loaders/header-loader';
import { loadFooter } from '../../content-loaders/footer-loader';

type PostProps = {
  global: {
    title: string;
  };
  header: React.ComponentProps<typeof Header>;
  footer: React.ComponentProps<typeof Footer>;
  metadata: {
    title: string;
    subtitle: string;
    publishedDate: string;
  };
  md: string;
};

const Post = ({ global, header, footer, metadata, md }: PostProps) => {
  return (
    <div>
      <Head title={global.title} />
      <Header {...header} />
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

export default Post;

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          post_name: 'how-to-make-chorizos',
        },
      },
      {
        params: {
          post_name: 'making-salami-at-home',
        },
      },
    ],
    fallback: false,
  };
}

export async function getStaticProps({
  params,
}: {
  params: { post_name: string };
}) {
  const mdContent: string = (
    await import(`../../../content/posts/${params.post_name}.md`)
  ).default;

  const classMap = {
    h5: 'text-2xl sm:text-4xl pt-8 sm:pt-12',
    h6: 'uppercase text-md sm:text-xl text-gray-600 pt-6 sm:pt-8',
    p: 'text-lg sm:text-xl pt-4 sm:pt-6',
    img: 'py-8',
  };
  // const showdown = require('showdown');
  const bindings = Object.entries(classMap).map(([key, value]) => ({
    type: 'output',
    regex: new RegExp(`<${key}(.*)>`, 'g'),
    replace: `<${key} class="${value}" $1>`,
  }));
  const converter = new Converter({
    metadata: true,
    noHeaderId: true,
    headerLevelStart: 5,
    extensions: [...bindings],
  });
  const md = converter.makeHtml(mdContent);
  const { publishedDate, ...otherMetadata } = converter.getMetadata() as any;

  return {
    props: {
      global,
      header: await loadHeader(),
      footer: await loadFooter(),
      md,
      metadata: {
        ...otherMetadata,
        publishedDate: formatDistance(parseISO(publishedDate), new Date(), {
          addSuffix: true,
        }),
      },
    },
  };
}
