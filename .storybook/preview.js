import { addDecorator, addParameters } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import React from 'react';
import '../src/styles/index.css';

const { iphone5, ipad } = INITIAL_VIEWPORTS;

addParameters({
  viewport: {
    viewports: { iphone5, ipad },
    defaultViewport: 'iphone5',
  },
});

// Add global styles
addDecorator(story => <>{story()}</>);
