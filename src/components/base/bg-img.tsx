import React from 'react';

type BgImgProps = {
  imgUrl: string;
};

export const BgImg = ({ imgUrl }: BgImgProps) => {
  const [imgLoaded, setImgLoaded] = React.useState(false);
  React.useMemo(() => {
    if (typeof window !== 'undefined') {
      const i = new Image();
      i.src = imgUrl;
      i.onload = () => setImgLoaded(true);
      i.onerror = () => setImgLoaded(true);
    }
  }, [imgUrl]);

  return (
    <div className="absolute inset-0 w-full h-full bg-baltic-sea">
      <div
        className={`relative w-full h-full bg-center bg-cover ${
          imgLoaded ? 'visible' : 'invisible'
        }`}
        style={{ backgroundImage: `url(${imgUrl})` }}
      >
        <div className="absolute inset-0 bg-img-overlay" />
      </div>
    </div>
  );
};
