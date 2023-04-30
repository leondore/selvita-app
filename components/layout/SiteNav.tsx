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
    <nav className={`flex-auto ${className}`} data-component="site-navigation">
      <ul className="sm:flex sm:items-center">
        {nav.map((navItem) => (
          <li key={navItem.name}>
            <Link
              href={navItem.path}
              className={`nav-item ${pathname === navItem.path && 'is-active'}`}
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
