import React from 'react';

type TitleSectionProps = {
  title: string;
  subtitle: string;
};

export type TitleSectionData = {
  kind: 'title';
} & TitleSectionProps;

export const TitleSection = ({ title, subtitle }: TitleSectionProps) => {
  return (
    <section className="container py-12 text-center title">
      <h2 className="text-2xl sm:text-4xl">{title}</h2>
      <h3 className="text-xl sm:text-2xl">{subtitle}</h3>
    </section>
  );
};
