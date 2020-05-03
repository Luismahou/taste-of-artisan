import React from 'react';
import { MenuLink } from './menu-link';

type FooterLink = {
  label: string;
  href: string;
};
type FooterColumnProps = {
  title: string;
  columnPosition: 'first' | 'second';
  links: readonly FooterLink[];
};
type FooterProps = {
  firstColumnData: Omit<FooterColumnProps, 'columnPosition'>;
  secondColumnData: Omit<FooterColumnProps, 'columnPosition'>;
  logoSrc: string;
};

const FooterColumn = ({ columnPosition, title, links }: FooterColumnProps) => (
  <div
    className={
      columnPosition === 'first'
        ? 'footer-first-column'
        : 'footer-second-column'
    }
  >
    <h3 className="pb-2 font-bold opacity-50">{title}</h3>
    <ul>
      {links.map((link) => (
        <li key={link.href} className="py-1">
          <MenuLink {...link} />
        </li>
      ))}
    </ul>
  </div>
);

export const Footer = ({
  firstColumnData,
  secondColumnData,
  logoSrc,
}: FooterProps) => {
  return (
    <footer className="py-8 text-white bg-baltic-sea">
      <div className="container text-center footer sm:text-left">
        <FooterColumn columnPosition="first" {...firstColumnData} />
        <FooterColumn columnPosition="second" {...secondColumnData} />
        <div className="footer-logo">
          <img alt="Logo" src={logoSrc} className="mx-auto" />
          <p className="text-center">
            &copy; Copyright {new Date().getFullYear()}, Taste of Artisan.
          </p>
        </div>
      </div>
    </footer>
  );
};
