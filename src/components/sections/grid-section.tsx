import React from 'react';

export type GridSectionData = {
  kind: 'grid';
};

type GridSectionProps = {
  sectionData: GridSectionData;
};

export const GridSection = ({ sectionData }: GridSectionProps) => {
  return (
    <div>
      grid section
      <style jsx>{`
        div {
          color: red;
        }
      `}</style>
    </div>
  );
};
