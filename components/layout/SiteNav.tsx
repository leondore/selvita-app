'use client';

import './SiteNav.css';

import { FC, useState } from 'react';
import Link from 'next/link';
import BaseIcon from '@/components/BaseIcon';
import { usePathname } from 'next/navigation';
import { nav } from '@/utils/constants';

interface SiteNavProps {
  className?: string;
}

const Nav: FC<SiteNavProps> = ({ className = '' }) => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className={className} data-component="site-navigation">
      <ul className="hidden items-center md:flex">
        {nav.map((navItem) => (
          <li key={navItem.name}>
            <Link
              href={navItem.path}
              className={`nav-item ${pathname === navItem.path && 'active'}`}
            >
              {navItem.label}
              <BaseIcon icon="reg-spa" className="icon" />
            </Link>
          </li>
        ))}
      </ul>

      <button
        className={`hamburger md:hidden ${isMenuOpen && 'is-active'}`}
        type="button"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>
    </nav>
  );
};

export default Nav;
