import React from 'react';
import Link from 'next/link';

type Post = {
  href: string;
  title: string;
};

type BlogProps = {
  posts: readonly Post[];
};

export const Blog = ({ posts }: BlogProps) => (
  <div>
    {posts.map((post) => (
      <Link key={post.href} href={post.href}>
        <a href={post.href}>{post.title}</a>
      </Link>
    ))}
  </div>
);

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
