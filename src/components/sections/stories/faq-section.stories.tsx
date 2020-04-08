import React from 'react';
import { loremIpsum } from 'lorem-ipsum';
import { FaqsSection } from '../faqs-section';

export default {
  title: 'FAQ section',
};

function generateQandAData() {
  return {
    question: loremIpsum(),
    answer: loremIpsum({
      units: 'sentences',
      count: Math.ceil(Math.random() * 3),
    }),
  };
}

export const faqsSection = () => (
  <FaqsSection
    faqs={[
      generateQandAData(),
      generateQandAData(),
      generateQandAData(),
      generateQandAData(),
      generateQandAData(),
    ]}
  />
);
