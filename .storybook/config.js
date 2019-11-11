import { configure, addDecorator, addParameters } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import React from 'react';
import { Sanitize } from '../src/styles/sanitize';
import { SanitizeForms } from '../src/styles/sanitize-forms';
import { SanitizeTypography } from '../src/styles/sanitize-typography';
import { Global } from '../src/styles/global';
import '../src/styles/index.css';

const { iphone5, ipad } = INITIAL_VIEWPORTS;

addParameters({
  viewport: {
    viewports: { iphone5, ipad },
    defaultViewport: 'iphone5',
  },
});

// Add global styles
addDecorator(story => (
  <>
    <Sanitize />
    <SanitizeForms />
    <SanitizeTypography />
    <Global />
    {story()}
  </>
));

// automatically import all files ending in *.stories.tsx
configure(require.context('../src', true, /\.stories\.tsx$/), module);
