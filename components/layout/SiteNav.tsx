'use client';

import '@/components/layout/SiteNav.css';

import { FC } from 'react';
import Link from 'next/link';
import BaseIcon from '@/components/BaseIcon';
import { usePathname } from 'next/navigation';
import { nav } from '@/utils/constants';

interface SiteNavProps {
  className?: string;
}

const Nav: FC<SiteNavProps> = ({ className = '' }) => {
  const pathname = usePathname();

  return (
    <nav
      className={`fixed right-0 top-0 z-10 h-screen w-80 bg-white shadow-2xl sm:relative sm:right-auto sm:h-auto sm:w-auto sm:flex-auto ${className}`}
      data-component="site-navigation"
    >
      <ul className="flex items-center">
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
    </nav>
  );
};

export default Nav;
