import { optimizeImage } from './image-optimizer';
import { HeroSectionData } from './components/sections/hero-section';
import header from '../content/header.json';
import footer from '../content/footer.json';
import faqs from '../content/faqs.json';

export async function loadHeader() {
  const { src: defaultLogoSrc } = await optimizeImage(header.logo, {
    default: { width: 200 },
  });
  return {
    ...header,
    logoSrc: defaultLogoSrc,
  };
}

export async function loadFooter() {
  const { src: defaultDarkLogoSrc } = await optimizeImage(footer.logoSrc, {
    default: { width: 200 },
  });
  return {
    ...footer,
    logoSrc: defaultDarkLogoSrc,
  };
}

type HeroData = Omit<HeroSectionData, 'imgSrcset'> & { imgSrc: string };
export async function loadHero(heroData: HeroData) {
  const { imgSrc, ...other } = heroData;
  const { srcset } = await optimizeImage(heroData.imgSrc, {
    small: { width: 400 },
    medium: { width: 800 },
    large: { width: 1200 },
  });

  const r = {
    ...other,
    imgSrcset: srcset,
  };
  console.log('hero data: ', r);
  return r;
}

export function loadFAQs() {
  return {
    kind: 'faqs',
    faqs: faqs.faqs,
  };
}
