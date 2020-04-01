import { Post } from '../../src/pages/post';
import { Converter } from 'showdown';
import { parseISO, formatDistance } from 'date-fns';
import global from '../../content/global.json';
import header from '../../content/header.json';
import footer from '../../content/footer.json';

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
    await import(`../../content/posts/${params.post_name}.md`)
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
      header,
      footer,
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
