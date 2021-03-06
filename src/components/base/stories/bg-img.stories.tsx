import React from 'react';
import { storiesOf } from '@storybook/react';
import { BgImg } from '../bg-img';

storiesOf('BgImg', module).add('interactive', () => (
  <BgImg
    imgSrc="http://joepapandrea.com.au/wp-content/uploads/cache/2016/03/joepapandrea_fitout/3232271715.jpg"
    imgSrcset="http://joepapandrea.com.au/wp-content/uploads/cache/2016/03/joepapandrea_fitout/3232271715.jpg 100w"
  />
));
