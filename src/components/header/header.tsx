import React, { useState } from 'react';
import repeat from 'lodash/repeat';
import { motion, AnimatePresence } from 'framer-motion';
import { useWindowScroll } from 'react-use';
import { resolveImage } from '../../base/image-resolver';
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
    className="fixed top-0 left-0 w-full h-full unstyle-button bg-baltic-sea"
    variants={variants}
    initial="closed"
    animate="open"
    exit="closed"
    onClick={onClick}
  />
);

type MenuItemData = {
  label: string;
  href: string;
};
type HeaderProps = {
  menuItems: readonly MenuItemData[];
};
export const Header = ({ menuItems }: HeaderProps) => {
  const { y } = useWindowScroll();
  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen((open) => !open);
  const atTop = y === 0;
  return (
    <header
      className={`
        sticky top-0
        py-2 sm:py-4
        bg-white z-10 transition-transform-quick
        ${atTop ? 'sm:header-translated' : 'sm:header-not-translated shadow-lg'}
      `}
    >
      <div
        className={`absolute inset-0 bg-white transition-transform-quick ${
          atTop ? 'sm:header-bg-scaled' : 'scale-1'
        }`}
      />
      <div
        className={`absolute inset-0 shadow transition-opacity-quick ${
          atTop ? 'opacity-0' : 'opacity-100'
        }`}
      />
      <div className="container flex items-center justify-between">
        <a href="/">
          <img
            alt="Logo"
            src={resolveImage('logo.png')}
            className={`w-16 logo-scaled transition-transform-quick ${
              atTop ? 'sm:logo-scaled' : ''
            }`}
          />
        </a>
        <div className="hidden sm:block">
          <nav>
            <ul
              className="flex-1 sm:header-menu"
              style={{
                gridTemplateColumns: createAutoColumns(menuItems.length),
              }}
            >
              {menuItems.map((mi) => (
                <li key={mi.href} className="py-3 font-medium uppercase">
                  <MenuLink label={mi.label} href={mi.href} theme="light" />
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
      </div>
    </header>
  );
};

function createAutoColumns(length: number) {
  return repeat('auto ', length).trim();
}
