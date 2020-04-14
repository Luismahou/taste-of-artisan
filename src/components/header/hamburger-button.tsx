import React from 'react';
import { motion } from 'framer-motion';

// Using `Pick` because if I try to get all the properties
// TypeScript complains about `css` property being incompatible.
type PathProps = Partial<
  Pick<React.ComponentProps<typeof motion.path>, 'd' | 'variants'>
>;
const Path = (props: PathProps) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="white"
    strokeLinecap="round"
    {...props}
  />
);

type HamburgerButtonProps = {
  onClick: () => void;
};
export const HamburgerButton = ({ onClick }: HamburgerButtonProps) => (
  <button
    className="relative z-20 flex items-center justify-center w-10 h-10 rounded-full cursor-pointer unstyle-button bg-baltic-sea"
    aria-label="Menu"
    onClick={onClick}
  >
    <svg width="23" height="18" viewBox="0 0 23 18">
      <Path
        variants={{
          closed: { d: 'M 2 2.5 L 20 2.5' },
          open: { d: 'M 3 16.5 L 17 2.5' },
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
      />
      <Path
        variants={{
          closed: { d: 'M 2 16.346 L 20 16.346' },
          open: { d: 'M 3 2.5 L 17 16.346' },
        }}
      />
    </svg>
  </button>
);
