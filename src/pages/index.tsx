import React from 'react';
import global from '../../content/global.json';
import { optimizeImage } from '../image-optimizer';
import { Head } from '../components/head/head';
import { Header } from '../components/header/header';
import { Footer } from '../components/footer/footer';
import { Section } from '../components/sections/section';
import { loadHeader } from '../content-loaders/header-loader';
import { loadFooter } from '../content-loaders/footer-loader';

type SectionData = React.ComponentProps<typeof Section>['sectionData'];
type IndexProps = {
  global: {
    title: string;
  };
  header: React.ComponentProps<typeof Header>;
  sectionDatas: readonly SectionData[];
  footer: React.ComponentProps<typeof Footer>;
};

const Index = ({ global, header, sectionDatas, footer }: IndexProps) => (
  <div>
    <Head title={global.title} />
    <Header {...header} />
    <div>
      {sectionDatas.map((sectionData, index) => (
        <Section
          key={`${sectionData.kind}-${index}`}
          sectionData={sectionData}
        />
      ))}
    </div>
    <Footer {...footer} />
  </div>
);

export default Index;

export async function getStaticProps() {
  const { srcset: rolledSausagesSrcset } = await optimizeImage(
    '/rolled-sausages.jpg',
    {
      small: { width: 400 },
      medium: { width: 800 },
      large: { width: 1200 },
    },
  );

  return {
    props: {
      global,
      header: await loadHeader(),
      footer: await loadFooter(),
      sectionDatas: [
        {
          kind: 'hero',
          imgSrcset: rolledSausagesSrcset,
          title: 'Ancient traditions by artisans of taste',
          subtitle: '',
        },
        {
          kind: 'title',
          title: 'Real food with 0 nasties',
          subtitle:
            'We follow strict processing and hygiene protocols that allow us to create sensational products with the total absence of chemical preservatives, sugars and allergens such as phosphates and gluten, free of glues and artificial proteins. In this Taste of Artisan is unique.',
        },
        {
          kind: 'side-by-side',
          cells: [
            {
              imgUrl: 'copertina.jpg',
              title: 'You are what you eat, applies to animals too',
              content:
                'We care about our health and that of our children, so we dedicate our energies with passion and dedication in the development and creation of nutritious and tasty healthy food products for the whole family.',
              // cta: {
              //   label: 'Learn more',
              //   href: '/blog/animal-welfare',
              // },
            },
            {
              imgUrl: 'kid-and-pig.jpg',
              title: 'Like you, they deserve to eat healthy & tasty',
            },
          ],
        },
        {
          kind: 'background-separator',
          imgUrl: 'meats-strip.jpg',
        },
        {
          kind: 'title',
          title: "It's who we are",
          subtitle:
            'Taste of Artisan was born thanks to the experience and Italian traditions handed down for generations in the production of artisan smallgoods',
        },
        {
          kind: 'faqs',
          faqs: [
            {
              question: 'Is delivery free?',
              answer:
                'We deliver our products free of charge to the following suburbs: Sydney metro, Mascot, Surry Hills, Redfern, Bondi, Bondi Junction, ...',
            },
            {
              question: 'For how long I can keep your goods in my fridge?',
              answer:
                'All our products are freshly made in our premises with neither preservatives nor nasties. Because of that, they expire quicker than the cheaper products you can find in supermarkets. They last from 5 to 7 days in the fridge.',
            },
            {
              question: 'Can I freeze your goods?',
              answer:
                "Yes, you can! And it's actually recommended if you're not planning to eat them straight away. In the freezer they will last up to 6 months.",
            },
          ],
        },
      ],
    },
  };
}
