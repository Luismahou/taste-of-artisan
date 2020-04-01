import React from 'react';
import { Head } from '../components/head/head';
import { Header } from '../components/header/header';
import { Footer } from '../components/footer/footer';
import { Section } from '../components/sections/section';

type MenuItemsData = React.ComponentProps<typeof Header>['menuItems'];
type SectionData = React.ComponentProps<typeof Section>['sectionData'];
type IndexProps = {
  global: {
    title: string;
  };
  header: {
    menuItems: MenuItemsData;
  };
  sectionDatas: readonly SectionData[];
  footer: {
    firstColumnData: React.ComponentProps<typeof Footer>['firstColumnData'];
    secondColumnData: React.ComponentProps<typeof Footer>['secondColumnData'];
  };
};

export const Index = ({ global, header, sectionDatas, footer }: IndexProps) => (
  <div>
    <Head title={global.title} />
    <Header menuItems={header.menuItems} />
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
