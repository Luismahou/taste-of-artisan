import { Blog } from '../../src/pages/blog';

export default Blog;

export function getStaticProps() {
  return {
    props: {
      posts: [
        {
          href: '/blog/how-to-make-chorizos',
          title: 'How to make chorizos',
        },
        {
          href: '/blog/medium-rare-burgers',
          title: 'Medium rare burgers',
        },
      ],
    },
  };
}
