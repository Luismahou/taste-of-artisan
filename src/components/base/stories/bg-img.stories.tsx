import React from 'react';
import { storiesOf } from '@storybook/react';
import { BgImg } from '../bg-img';

storiesOf('BgImg', module).add('interactive', () => (
  <BgImg imgUrl="http://joepapandrea.com.au/wp-content/uploads/cache/2016/03/joepapandrea_fitout/3232271715.jpg" />
));
