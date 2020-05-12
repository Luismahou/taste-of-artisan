import global from '../../content/global.json';
import Page from './[page]';
import { loadHomePage, loadHeader, loadFooter } from '../content-loaders';

export default Page;

export async function getStaticProps() {
  const { sections } = await loadHomePage();
  return {
    props: {
      global,
      header: await loadHeader(),
      footer: await loadFooter(),
      sectionDatas: sections,
    },
  };
}
