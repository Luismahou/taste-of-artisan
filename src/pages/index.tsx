import React from 'react';
import { Head } from '../components/head/head';
import { Header } from '../components/header/header';
import { Footer } from '../components/footer/footer';
import { Section } from '../components/sections/section';
import '../styles/index.css';

type MenuItemsData = React.ComponentProps<typeof Header>['menuItems'];
type SectionData = React.ComponentProps<typeof Section>['sectionData'];
type IndexProps = {
  global: {
    title: string;
  };
  header: {
    menuItems: MenuItemsData;
  };
  sectionDatas: readonly SectionData[];
  footer: {
    firstColumnData: React.ComponentProps<typeof Footer>['firstColumnData'];
    secondColumnData: React.ComponentProps<typeof Footer>['secondColumnData'];
  };
};

export const Index = ({ global, header, sectionDatas, footer }: IndexProps) => (
  <div>
    <Head title={global.title} />
    <Header menuItems={header.menuItems} />
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

export async function getStaticProps() {
  const global = (await import('../../content/global.json')).default;
  const header = (await import('../../content/header.json')).default;
  const footer = (await import('../../content/footer.json')).default;
  return {
    props: {
      global,
      header,
      footer,
      sectionDatas: [
        {
          kind: 'hero',
          // imgUrl: 'https://image.shutterstock.com/z/stock-photo-happy-asian-man-is-eating-the-delicious-favorite-sausage-he-cooked-himself-1372880834.jpg',
          // imgUrl: 'https://image.shutterstock.com/image-photo/handsome-man-eating-tasty-burger-600w-1354479809.jpg',
          imgUrl:
            'http://joepapandrea.com.au/wp-content/uploads/cache/2016/03/joepapandrea_fitout/3232271715.jpg',
          title: 'Taste the difference',
          subtitle: 'Real food for real people',
        },
        {
          kind: 'title',
          title: 'Real food with 0 nasties',
          subtitle:
            'None of our products contain preservatives and are made fresh daily with the best ingredients',
        },
        {
          kind: 'side-by-side',
          cells: [
            {
              imgUrl:
                'https://cdn.pixabay.com/photo/2017/08/03/21/52/cow-2578458_1280.jpg',
              title: 'The welfare of animals is our priority',
              content:
                'Lorem ipsum sed vitae placerat aliquet consequat ut et donec ut consequat et donec lorem vitae aliquet placerat ipsum sed',
              cta: {
                label: 'Learn more',
                href: '/blog/animal-welfare',
              },
            },
            {
              imgUrl:
                'https://cdn.pixabay.com/photo/2018/08/20/15/01/traditional-meat-3619115_1280.jpg',
              title: 'Ancestors traditions to your palate',
              content:
                'Lorem ipsum sed vitae placerat aliquet consequat ut et donec ut consequat et donec lorem vitae aliquet placerat ipsum sed',
            },
            {
              imgUrl:
                'https://healthy-kids.com.au/wp-content/uploads/2013/10/familydinner1.jpg',
              title: 'Delicious meals for the whole family',
              content:
                'Lorem ipsum sed vitae placerat aliquet consequat ut et donec ut consequat et donec lorem vitae aliquet placerat ipsum sed',
            },
          ],
        },
        {
          kind: 'background-separator',
          imgUrl:
            'https://as1.ftcdn.net/jpg/03/12/52/60/500_F_312526077_DQZd03jtcSe16kuCgUOnUj2Fy4nxF82J.jpg',
          // imgUrl: 'https://media-private.canva.com/MADatiWZ5CU/1/screen_2x.jpg?response-expires=Mon%2C%2020%20Jan%202020%2002%3A03%3A41%20GMT&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20200120T000108Z&X-Amz-SignedHeaders=host&X-Amz-Expires=7352&X-Amz-Credential=AKIAJWF6QO3UH4PAAJ6Q%2F20200120%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=d5a90c6ad7481ba8cb401582787722c80ba393781988572ca04d0afa90838b1a'
        },
      ],
    },
  };
}
