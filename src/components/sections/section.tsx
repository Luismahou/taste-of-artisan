import React from 'react';
import { UnreachableError } from '../../base/unreachable-error';
import { HeroSection, HeroSectionData } from './hero-section';
import { GridSection, GridSectionData } from './grid-section';
import { TitleSection, TitleData } from './title-section';

type SectionProps = {
  sectionData: HeroSectionData | GridSectionData | TitleData;
};

export const Section = ({ sectionData }: SectionProps) => {
  switch (sectionData.kind) {
    case 'hero':
      return <HeroSection sectionData={sectionData} />;
    case 'grid':
      return <GridSection sectionData={sectionData} />;
    case 'title':
      return <TitleSection {...sectionData} />;
    default:
      throw new UnreachableError(sectionData);
  }
};
