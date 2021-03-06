import React from 'react';

type BgImgProps = {
  imgSrc: string;
  imgSrcset: string;
};

export const BgImg = ({ imgSrc, imgSrcset }: BgImgProps) => {
  return (
    <div className="absolute inset-0 w-full h-full bg-baltic-sea">
      <img
        className={`relative w-full h-full bg-center bg-cover object-cover`}
        src={imgSrc}
        srcSet={imgSrcset}
      ></img>
      <div className="absolute inset-0 bg-img-overlay" />
    </div>
  );
};
