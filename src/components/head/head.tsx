import React from 'react';
import NextHead from 'next/head';

type HeadProps = {
  title: string;
};

export const Head = ({ title }: HeadProps) => (
  <NextHead>
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
  </NextHead>
);
