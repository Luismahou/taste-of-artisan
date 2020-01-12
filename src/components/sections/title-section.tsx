import React from 'react';

type TitleSectionProps = {
  title: string;
  subtitle: string;
};

export type TitleData = {
  kind: 'title';
} & TitleSectionProps;

export const TitleSection = ({ title, subtitle }: TitleSectionProps) => {
  return (
    <section className="container text-center py-12 title">
      <h1 className="text-4xl sm:text-6xl">{title}</h1>
      <h2 className="text-2xl sm:text-4xl">{subtitle}</h2>
    </section>
  );
};
