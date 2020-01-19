import React from 'react';

type LinkButtonProps = {
  href: string;
  text: string;
};

export const LinkButton = ({ href, text }: LinkButtonProps) => (
  <a
    className="inline-block px-8 py-2 text-lg text-white rounded sm:text-xl bg-muddy-waters"
    href={href}
  >
    {text}
  </a>
);
