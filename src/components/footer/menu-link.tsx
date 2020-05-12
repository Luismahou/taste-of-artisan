import React from 'react';
import Link from 'next/link';

type MenuLinkProps = {
  label: string;
  href: string;
};
export const MenuLink = ({ label, href }: MenuLinkProps) => {
  const finalHref = href.startsWith('/blog/') ? '/blog/[post_name]' : '/[page]';
  return (
    <Link as={href} href={finalHref}>
      <a className="relative py-2 font-medium text-gray-300 cursor-pointer text-normal hover:text-white active:text-gray-400">
        {label}
      </a>
    </Link>
  );
};
