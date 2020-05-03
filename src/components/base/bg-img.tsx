import React from 'react';

type BgImgProps = {
  imgSrcset: string;
};

export const BgImg = ({ imgSrcset }: BgImgProps) => {
  return (
    <div className="absolute inset-0 w-full h-full bg-baltic-sea">
      <img
        className={`relative w-full h-full bg-center bg-cover object-cover`}
        srcSet={imgSrcset}
      ></img>
      <div className="absolute inset-0 bg-img-overlay" />
    </div>
  );
};
