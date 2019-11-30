import React, { useState } from 'react';
import Link from 'next/link';

type MenuLinkProps = {
  label: string;
  href: string;
};
export const MenuLink = ({ label, href }: MenuLinkProps) => {
  const [hovering, setHovering] = useState(false);
  const onMouseOver = () => setHovering(true);
  const onMouseOut = () => setHovering(false);

  return (
    <Link href={href}>
      <a
        className={`
relative text-normal font-medium py-2 cursor-pointer
text-gray-300 hover:text-white active:text-gray-400
        `}
        onMouseOver={onMouseOver}
        onMouseOut={onMouseOut}
      >
        {label}
      </a>
    </Link>
  );
};
