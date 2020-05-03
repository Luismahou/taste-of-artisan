import React from 'react';
import { Head } from '../components/head/head';
import { Header } from '../components/header/header';
import { Footer } from '../components/footer/footer';
import { Section } from '../components/sections/section';

type SectionData = React.ComponentProps<typeof Section>['sectionData'];
type IndexProps = {
  global: {
    title: string;
  };
  header: React.ComponentProps<typeof Header>;
  sectionDatas: readonly SectionData[];
  footer: React.ComponentProps<typeof Footer>;
};

export const Index = ({ global, header, sectionDatas, footer }: IndexProps) => (
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
