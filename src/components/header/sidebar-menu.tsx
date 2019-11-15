import React from 'react';
import { motion, Variants } from 'framer-motion';
import { MenuLink } from './menu-link';

const menuItemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

type MenuItemProps = {
  href: string;
  label: string;
};
const MenuItem = ({ href, label }: MenuItemProps) => (
  <motion.li variants={menuItemVariants} className="p-4 text-center">
    <MenuLink label={label} href={href} theme="dark" />
  </motion.li>
);

const sidebarVariants = {
  open: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.07,
    },
  },
  closed: {
    opacity: 0,
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

type SidebarMenuProps = {
  menuItems: readonly MenuItemProps[];
};
export const SidebarMenu = ({ menuItems }: SidebarMenuProps) => (
  <motion.ul
    variants={sidebarVariants as Variants}
    initial="closed"
    animate="open"
    exit="closed"
    className="fixed top-0 bottom-0 right-0 p-5 bg-baltic-sea z-10"
    style={{ paddingTop: 120, maxWidth: 400, width: '80vw' }}
  >
    {menuItems.map(mi => (
      <MenuItem key={mi.href} {...mi} />
    ))}
  </motion.ul>
);
