import React from 'react';

export type BackgroundSeparatorSectionData = {
  kind: 'background-separator';
} & BackgroundSeparatorSectionProps;

type BackgroundSeparatorSectionProps = {
  imgSrc: string;
  imgSrcset: string;
};

export const BackgroundSeparatorSection = ({
  imgSrc,
  imgSrcset,
}: BackgroundSeparatorSectionProps) => (
  <div className="py-8">
    <img
      style={{ height: '50vw', maxHeight: 300 }}
      className="object-cover object-center w-full"
      src={imgSrc}
      srcSet={imgSrcset}
    />
  </div>
);
