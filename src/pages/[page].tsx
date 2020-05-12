import React from 'react';
import fs from 'fs';
import global from '../../content/global.json';
import { Head } from '../components/head/head';
import { Header } from '../components/header/header';
import { Footer } from '../components/footer/footer';
import { Section } from '../components/sections/section';
import { loadHeader, loadFooter, loadSections } from '../content-loaders';

type SectionData = React.ComponentProps<typeof Section>['sectionData'];
type PageProps = {
  global: {
    title: string;
  };
  header: React.ComponentProps<typeof Header>;
  sectionDatas: readonly SectionData[];
  footer: React.ComponentProps<typeof Footer>;
};

const Page = ({ global, header, sectionDatas, footer }: PageProps) => (
  <div>
    <Head title={global.title} />
    <Header {...header} />
    <div>
      {sectionDatas.map((sectionData, index) => (
        <Section
          key={`${sectionData.kind}-${index}`}
          sectionData={sectionData}
        />
      ))}
    </div>
    <Footer {...footer} />
  </div>
);

export default Page;

export async function getStaticPaths() {
  const paths = fs
    .readdirSync('content/pages')
    .filter((filename) => filename !== 'index.json')
    .map((filename) => {
      const page = filename.substring(0, filename.length - 5);
      return {
        params: {
          page,
        },
      };
    });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { page: string } }) {
  const pageContents = fs.readFileSync(
    `content/pages/${params.page}.json`,
    'utf-8',
  );
  return {
    props: {
      global,
      header: await loadHeader(),
      footer: await loadFooter(),
      sectionDatas: await loadSections(JSON.parse(pageContents).sections),
    },
  };
}
