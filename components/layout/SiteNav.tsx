'use client';

import type { FC } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { nav } from '@/utils/constants';

interface SiteNavProps {
  className?: string;
}

const Nav: FC<SiteNavProps> = ({ className }) => {
  const pathname = usePathname();

  return (
    <nav className={className}>
      <ul className="flex items-center">
        {nav.map((navItem) => (
          <li key={navItem.name}>
            <Link
              href={navItem.path}
              className={`block px-8 font-semibold transition-all duration-200 ease-in-out hover:text-dark focus:text-dark ${
                pathname === navItem.path ? 'text-dark' : 'text-gray-400'
              }`}
            >
              {navItem.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
