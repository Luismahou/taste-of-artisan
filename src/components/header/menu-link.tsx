import React, { useState } from 'react';
import Link from 'next/link';

type MenuLinkProps = {
  label: string;
  href: string;
  theme: 'light' | 'dark';
};
export const MenuLink = ({ label, href, theme }: MenuLinkProps) => {
  const [hovering, setHovering] = useState(false);
  const onMouseOver = () => setHovering(true);
  const onMouseOut = () => setHovering(false);

  return (
    <Link href={href}>
      <a
        className={`
    relative text-lg font-medium py-2 uppercase cursor-pointer
    ${
      theme === 'light'
        ? ''
        : 'text-gray-200 hover:text-white active:text-gray-400'
    }
  `}
        onMouseOver={onMouseOver}
        onMouseOut={onMouseOut}
      >
        {label}
        <div
          style={{
            left: '50%',
            transform: `translateX(-50%) ${hovering ? 'translateY(4px)' : ''}`,
          }}
          className={`absolute w-8 h-1 bg-muddy-waters rounded transition-transform-opacity-quick ${
            hovering ? 'opacity-100' : 'opacity-0'
          }`}
        />
      </a>
    </Link>
  );
};
