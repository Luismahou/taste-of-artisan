import React from 'react';
import Head from 'next/head';
import { Section } from '../components/section';

type SectionData = React.ComponentProps<typeof Section>['sectionData'];
type IndexProps = {
  title: string;
  sectionDatas: readonly SectionData[];
};

export const Index = ({ title, sectionDatas }: IndexProps) => (
  <div>
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <header>Header</header>
    <div>
      {sectionDatas.map(sectionData => (
        <Section sectionData={sectionData} />
      ))}
    </div>
    <footer>Footer</footer>
  </div>
);

Index.getInitialProps = () => ({
  title: 'Taste of Artisan',
  sectionDatas: [
    {
      kind: 'hero',
      imgUrl: '',
      title: 'Hero title',
      subtitle: 'hero subtitle',
      ctaText: 'Click',
    },
    {
      kind: 'grid',
    },
  ],
});
