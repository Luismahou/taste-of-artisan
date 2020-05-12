import React from 'react';
import { LinkButton } from 'components/base/link-button';

export type SideBySideSectionData = {
  kind: 'side-by-side';
} & SideBySideSectionProps;

export type Side = {
  imgSrc: string;
  imgSrcset: string;
  title: string;
  content: string;
  cta?: {
    label: string;
    href: string;
  };
};

type SideBySideSectionProps = {
  sides: readonly Side[];
};

export const SideBySideSection = ({ sides }: SideBySideSectionProps) => {
  return (
    <section className="container py-8 side-by-side">
      {sides.map(({ imgSrc, imgSrcset, ...textProps }, index) => {
        const isOdd = index % 2 !== 0;
        return (
          <div
            key={index}
            className={`side-by-side-pair ${isOdd ? 'reversed' : ''}`}
          >
            <SideImg imgSrc={imgSrc} imgSrcset={imgSrcset} />
            <SideText {...textProps} />
          </div>
        );
      })}
    </section>
  );
};

type SideImgProps = {} & Pick<Side, 'imgSrc' | 'imgSrcset'>;

const SideImg = ({ imgSrc, imgSrcset }: SideImgProps) => {
  return (
    <>
      <svg className="side-by-side-img" viewBox="0 0 1 .75" />
      <img
        className="object-cover object-center h-full side-by-side-img"
        src={imgSrc}
        srcSet={imgSrcset}
      />
    </>
  );
};

type SideTextProps = {} & Pick<Side, 'title' | 'content' | 'cta'>;
const SideText = ({ title, content, cta }: SideTextProps) => (
  <div className={'side-by-side-text flex flex-col justify-center'}>
    <h2 className="text-2xl font-bold sm:text-3xl">{title}</h2>
    <p className="text-lg sm:text-xl">{content}</p>
    {cta ? (
      <div className="pt-4">
        <LinkButton href={cta.href} text={cta.label} />
      </div>
    ) : null}
  </div>
);
