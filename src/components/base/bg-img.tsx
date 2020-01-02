import React from 'react';

type BgImgProps = {
  imgUrl: string;
};

export const BgImg = ({ imgUrl }: BgImgProps) => {
  const [imgLoaded, setImgLoaded] = React.useState(false);
  React.useMemo(() => {
    if (typeof window === 'undefined') {
      setImgLoaded(true);
    } else {
      const i = new Image();
      i.src = imgUrl;
      i.onload = () => setImgLoaded(true);
      i.onerror = () => setImgLoaded(true);
    }
  }, [imgUrl]);

  const style = imgLoaded ? { backgroundImage: `url(${imgUrl})` } : {};

  return (
    <div
      className="absolute inset-0 bg-baltic-sea bg-center bg-cover"
      style={style}
    >
      <div className="absolute inset-0 bg-img-overlay" />
    </div>
  );
};
