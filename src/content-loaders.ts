import { optimizeImage } from './image-optimizer';
import header from '../content/header.json';
import footer from '../content/footer.json';

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
