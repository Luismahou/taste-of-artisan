import { optimizeImage } from '../image-optimizer';
import header from '../../content/header.json';

export async function loadHeader() {
  const { src: defaultLogoSrc } = await optimizeImage(header.logo, {
    default: { width: 200 },
  });
  return {
    ...header,
    logoSrc: defaultLogoSrc,
  };
}
