import { optimizeImage } from './image-optimizer';
import { HeroSectionData } from './components/sections/hero-section';
import header from '../content/header.json';
import footer from '../content/footer.json';
import faqs from '../content/faqs.json';
import homePage from '../content/pages/index.json';
import { TitleSectionData } from './components/sections/title-section';
import { BackgroundSeparatorSectionData } from './components/sections/background-separator-section';
import {
  SideBySideSectionData,
  Side,
} from './components/sections/side-by-side-section';

type HeroSectionTemplate = Omit<
  HeroSectionData,
  'kind' | 'imgSrc' | 'imgSrcset'
> & {
  template: 'hero-section';
  backgroundImage: string;
};
type TitleSectionTemplate = Omit<TitleSectionData, 'kind'> & {
  template: 'title-section';
};
type BackgroundSeparatorSectionTemplate = Omit<
  BackgroundSeparatorSectionData,
  'kind' | 'src' | 'srcset'
> & { template: 'background-separator-section'; image: string };
type SideTemplate = Omit<Side, 'imgSrc' | 'imgSrcset'> & {
  image: string;
};
type SideBySideSectionTemplate = Omit<
  SideBySideSectionData,
  'kind' | 'sides'
> & {
  template: 'side-by-side-section';
  sides: readonly SideTemplate[];
};
type FaqSectionTemplate = {
  template: 'faq-section';
};
type SectionTemplate =
  | HeroSectionTemplate
  | TitleSectionTemplate
  | BackgroundSeparatorSectionTemplate
  | SideBySideSectionTemplate
  | FaqSectionTemplate;

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

export async function loadHero(
  heroSectionTemplate: HeroSectionTemplate,
): Promise<HeroSectionData> {
  const { backgroundImage, title, subtitle } = heroSectionTemplate;
  const { src, srcset } = await optimizeImage(backgroundImage, {
    small: { width: 400 },
    medium: { width: 800 },
    large: { width: 1200 },
  });

  return {
    kind: 'hero',
    imgSrc: src,
    imgSrcset: srcset,
    title,
    subtitle: subtitle || '',
  };
}

export async function loadHomePage() {
  return {
    sections: await loadSections(homePage.sections as SectionTemplate[]),
  };
}

function loadTitle({
  title,
  subtitle,
}: TitleSectionTemplate): Promise<TitleSectionData> {
  return Promise.resolve({
    kind: 'title',
    title,
    subtitle: subtitle || '',
  });
}
async function loadBackgroundSeparator({
  image,
}: BackgroundSeparatorSectionTemplate): Promise<
  BackgroundSeparatorSectionData
> {
  const { src, srcset } = await optimizeImage(image, {
    small: { width: 400 },
    medium: { width: 800 },
    large: { width: 1200 },
  });
  return {
    kind: 'background-separator',
    imgSrc: src,
    imgSrcset: srcset,
  };
}
async function loadSideBySide({
  sides,
}: SideBySideSectionTemplate): Promise<SideBySideSectionData> {
  return {
    kind: 'side-by-side',
    sides: await Promise.all(
      sides.map(async ({ image, title, content }) => {
        const { src, srcset } = await optimizeImage(image, {
          small: { width: 400 },
          medium: { width: 600 },
        });

        return {
          imgSrc: src,
          imgSrcset: srcset,
          title,
          content,
        };
      }),
    ),
  };
}

export async function loadSections(sections: readonly SectionTemplate[]) {
  return await Promise.all(
    sections.map(async (section) => {
      switch (section.template) {
        case 'hero-section':
          return await loadHero(section);
        case 'title-section':
          return await loadTitle(section);
        case 'background-separator-section':
          return await loadBackgroundSeparator(section);
        case 'side-by-side-section':
          return await loadSideBySide(section);
        case 'faq-section':
          return loadFAQs();
      }
    }),
  );
}

export function loadFAQs() {
  return {
    kind: 'faqs',
    faqs: faqs.faqs,
  };
}
