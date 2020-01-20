import React from 'react';

type BgImgProps = {
  imgUrl: string;
};

export const BgImg = ({ imgUrl }: BgImgProps) => {
  const [imgLoaded, setImgLoaded] = React.useState(false);
  const image = React.useMemo(() => {
    if (typeof window !== 'undefined') {
      const i = new Image();
      i.src = imgUrl;
      i.onload = () => setImgLoaded(true);
      i.onerror = () => setImgLoaded(true);
      return i;
    }
    return undefined;
  }, [imgUrl]);
  React.useEffect(
    () => () => {
      if (image) {
        image.onload = null;
        image.onerror = null;
      }
    },
    [imgUrl],
  );
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
