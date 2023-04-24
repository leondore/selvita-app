'use client';

import './SiteNav.css';

import type { FC } from 'react';
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
    <nav className={className} data-component="site-navigation">
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
