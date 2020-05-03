import React from 'react';

export type BackgroundSeparatorSectionData = {
  kind: 'background-separator';
} & BackgroundSeparatorSectionProps;

type BackgroundSeparatorSectionProps = {
  imgSrcset: string;
};

export const BackgroundSeparatorSection = ({
  imgSrcset,
}: BackgroundSeparatorSectionProps) => (
  <div className="py-8">
    <img
      style={{ height: '50vw', maxHeight: 300 }}
      className="object-cover object-center"
      srcSet={imgSrcset}
    />
  </div>
);
