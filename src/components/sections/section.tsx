import React from 'react';
import { UnreachableError } from '../../base/unreachable-error';
import { HeroSection, HeroSectionData } from './hero-section';
import { TitleSection, TitleSectionData } from './title-section';
import {
  BackgroundSeparatorSection,
  BackgroundSeparatorSectionData,
} from './background-separator-section';
import {
  SideBySideSection,
  SideBySideSectionData,
} from './side-by-side-section';

type SectionProps = {
  sectionData:
    | HeroSectionData
    | TitleSectionData
    | SideBySideSectionData
    | BackgroundSeparatorSectionData;
};

export const Section = ({ sectionData }: SectionProps) => {
  switch (sectionData.kind) {
    case 'hero':
      return <HeroSection {...sectionData} />;
    case 'title':
      return <TitleSection {...sectionData} />;
    case 'side-by-side':
      return <SideBySideSection {...sectionData} />;
    case 'background-separator':
      return <BackgroundSeparatorSection {...sectionData} />;
    default:
      throw new UnreachableError(sectionData);
  }
};
