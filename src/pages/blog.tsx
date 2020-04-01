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
