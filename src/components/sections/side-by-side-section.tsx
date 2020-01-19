import React from 'react';
import { LinkButton } from '../base/link-button';

export type SideBySideSectionData = {
  kind: 'side-by-side';
} & SideBySideSectionProps;

type Cell = {
  imgUrl: string;
  title: string;
  content: string;
  cta?: {
    label: string;
    href: string;
  };
};

type SideBySideSectionProps = {
  cells: readonly Cell[];
};

export const SideBySideSection = ({ cells }: SideBySideSectionProps) => {
  return (
    <section className="container py-8 side-by-side">
      {cells.map(({ imgUrl, ...textProps }, index) => {
        const isOdd = index % 2 !== 0;
        return (
          <div
            key={index}
            className={`side-by-side-pair ${isOdd ? 'reversed' : ''}`}
          >
            <SideImg imgUrl={imgUrl} />
            <SideText {...textProps} />
          </div>
        );
      })}
    </section>
  );
};

type SideImgProps = {} & Pick<Cell, 'imgUrl'>;

const SideImg = ({ imgUrl }: SideImgProps) => {
  return (
    <>
      <svg className="side-by-side-img" viewBox="0 0 1 1" />
      <div
        className="bg-cover side-by-side-img"
        style={{ backgroundImage: `url(${imgUrl})` }}
      />
    </>
  );
};

type SideTextProps = {} & Pick<Cell, 'title' | 'content' | 'cta'>;
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
