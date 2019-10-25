import React from 'react';

export type HeroSectionData = {
  kind: 'hero';
  imgUrl: string;
  title: string;
  subtitle: string;
  ctaText: string;
};

type HeroSectionProps = {
  sectionData: HeroSectionData;
};

export const HeroSection = ({
  sectionData: { imgUrl, title, subtitle, ctaText },
}: HeroSectionProps) => {
  return <div>hero section</div>;
};
