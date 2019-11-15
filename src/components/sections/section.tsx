import React from 'react';
import { UnreachableError } from '../../base/unreachable-error';
import { HeroSection, HeroSectionData } from './hero-section';
import { GridSection, GridSectionData } from './grid-section';

type SectionProps = {
  sectionData: HeroSectionData | GridSectionData;
};

export const Section = ({ sectionData }: SectionProps) => {
  switch (sectionData.kind) {
    case 'hero':
      return <HeroSection sectionData={sectionData} />;
    case 'grid':
      return <GridSection sectionData={sectionData} />;
    default:
      throw new UnreachableError(sectionData);
  }
};
