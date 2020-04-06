import { Index } from '../src/pages/index';
import global from '../content/global.json';
import header from '../content/header.json';
import footer from '../content/footer.json';

export default Index;

export function getStaticProps() {
  return {
    props: {
      global,
      header,
      footer,
      sectionDatas: [
        {
          kind: 'hero',
          imgUrl: 'rolled-sausages.jpg',
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
      ],
    },
  };
}
