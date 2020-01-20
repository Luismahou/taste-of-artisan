import React from 'react';

export type BackgroundSeparatorSectionData = {
  kind: 'background-separator';
} & BackgroundSeparatorSectionProps;

type BackgroundSeparatorSectionProps = {
  imgUrl: string;
};

export const BackgroundSeparatorSection = ({
  imgUrl,
}: BackgroundSeparatorSectionProps) => (
  <div className="py-8">
    <div
      style={{
        backgroundImage: `url(${imgUrl})`,
        height: '50vw',
        maxHeight: 300,
      }}
      className="bg-center bg-cover"
    />
  </div>
);
