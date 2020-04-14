import React from 'react';

type Faq = {
  question: string;
  answer: string;
};

type FaqsSectionProps = {
  faqs: readonly Faq[];
};

export type FaqsSectionData = {
  kind: 'faqs';
} & FaqsSectionProps;

export const FaqsSection = ({ faqs }: FaqsSectionProps) => (
  <section className="container py-12">
    <h2 className="text-2xl text-center sm:text-4xl">
      Frequently Asked Questions
    </h2>
    <ul>
      {faqs.map(({ question, answer }, index) => (
        <li key={index} className="py-4">
          <p className="pb-2 text-lg sm:text-xl">{question}</p>
          <p className="text-gray-700 sm:text-lg">{answer}</p>
        </li>
      ))}
    </ul>
  </section>
);
