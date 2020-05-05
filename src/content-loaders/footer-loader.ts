import { optimizeImage } from '../image-optimizer';
import footer from '../../content/footer.json';

export async function loadFooter() {
  const { src: defaultDarkLogoSrc } = await optimizeImage(footer.logoSrc, {
    default: { width: 200 },
  });
  return {
    ...footer,
    logoSrc: defaultDarkLogoSrc,
  };
}
