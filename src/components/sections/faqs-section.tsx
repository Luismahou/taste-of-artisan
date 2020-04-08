import React from 'react';

type Faq = {
  question: string;
  answer: string;
};

type FaqSectionProps = {
  faqs: readonly Faq[];
};

export type FaqSectionData = {
  kind: 'faq';
} & FaqSectionProps;

export const FaqsSection = ({ faqs }: FaqSectionProps) => (
  <section className="container">
    <ul>
      {faqs.map(({ question, answer }, index) => (
        <div key={index} className="py-4">
          <p className="pb-2 text-lg font-bold sm:text-xl">{question}</p>
          <p className="sm:text-lg">{answer}</p>
        </div>
      ))}
    </ul>
  </section>
);
