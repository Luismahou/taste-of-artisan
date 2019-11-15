import React from 'react';

export type HeroSectionData = {
  kind: 'hero';
  imgUrl: string;
  title: string;
  subtitle: string;
  ctaText: string;
};

type HeroSectionProps = {
  sectionData: HeroSectionData;
};

export const HeroSection = ({
  sectionData: { imgUrl, title, subtitle, ctaText },
}: HeroSectionProps) => {
  return (
    <section>
      <div className="bg-img">
        <h1>{title}</h1>
      </div>
      <style jsx>{`
        .bg-img {
          position: relative;
          background-image: url(${imgUrl});
          background-size: cover;
          background-position: center;
          width: 100%;
          padding-top: 400px;
          box-sizing: border-box;
        }

        h1 {
          font-size: 30px;
          position: absolute;
          left: 10%;
          bottom: 10%;
          text-shadow: 1px 1px 4px #444;
        }

        @media (min-width: 600px) {
          .bg-img {
            padding-top: 70vh;
          }

          h1 {
            font-size: 40px;
          }
        }
      `}</style>
    </section>
  );
};
