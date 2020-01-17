import React from 'react';
import { UnreachableError } from '../../base/unreachable-error';
import { HeroSection, HeroSectionData } from './hero-section';
import { GridSection, GridSectionData } from './grid-section';
import { TitleSection, TitleSectionData } from './title-section';
import {
  SideBySideSection,
  SideBySideSectionData,
} from './side-by-side-section';

type SectionProps = {
  sectionData:
    | HeroSectionData
    | GridSectionData
    | TitleSectionData
    | SideBySideSectionData;
};

export const Section = ({ sectionData }: SectionProps) => {
  switch (sectionData.kind) {
    case 'hero':
      return <HeroSection sectionData={sectionData} />;
    case 'grid':
      return <GridSection sectionData={sectionData} />;
    case 'title':
      return <TitleSection {...sectionData} />;
    case 'side-by-side':
      return <SideBySideSection {...sectionData} />;
    default:
      throw new UnreachableError(sectionData);
  }
};
