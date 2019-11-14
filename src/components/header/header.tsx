import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useWindowScroll } from 'react-use';
import { HamburgerButton } from './hamburger-button';
import { SidebarMenu } from './sidebar-menu';
import { MenuLink } from './menu-link';

const variants = {
  open: {
    opacity: 0.3,
  },
  closed: {
    opacity: 0,
  },
};

type BackdropProps = {
  onClick: () => void;
};
export const Backdrop = ({ onClick }: BackdropProps) => (
  <motion.button
    className="unstyle-button fixed top-0 left-0 h-full w-full bg-baltic-sea"
    variants={variants}
    initial="closed"
    animate="open"
    exit="closed"
    onClick={onClick}
  />
);

type MenuItemData = {
  label: string;
  slug: string;
};
type HeaderProps = {
  menuItems: readonly MenuItemData[];
};
export const Header = ({ menuItems }: HeaderProps) => {
  const { y } = useWindowScroll();
  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen(open => !open);
  return (
    <header
      className={`
        sticky top-0 flex
        justify-between items-center
        px-4 py-2 sm:py-4
        bg-white z-10 transition-transform-quick
        ${y > 0 ? 'sm:header-not-translated' : 'sm:header-translated'}
      `}
    >
      <img
        alt="Logo"
        src="/logo.png"
        className={`w-16 logo-scaled transition-transform-quick ${
          y === 0 ? 'sm:logo-scaled' : ''
        }`}
      />
      <div className="hidden sm:block">
        <nav>
          <ul className="flex flex-1">
            {menuItems.map(mi => (
              <li key={mi.slug} className="uppercase p-3 font-medium">
                <MenuLink label={mi.label} href={mi.slug} theme="light" />
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="block sm:hidden">
        <motion.nav initial={false} animate={open ? 'open' : 'closed'}>
          <HamburgerButton onClick={toggleOpen} />
          <AnimatePresence>
            {open && <Backdrop onClick={toggleOpen} />}
          </AnimatePresence>
          <AnimatePresence>
            {open && <SidebarMenu menuItems={menuItems} />}
          </AnimatePresence>
        </motion.nav>
      </div>
      <div
        className={`absolute inset-0 shadow transition-opacity-quick ${
          y === 0 ? 'opacity-0' : 'opacity-100'
        }`}
      />
    </header>
  );
};
