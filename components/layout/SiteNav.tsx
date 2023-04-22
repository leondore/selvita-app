'use client';

import type { FC } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { nav } from '@/utils/constants';

interface SiteNavProps {
  className?: string;
}

const Nav: FC<SiteNavProps> = ({ className = '' }) => {
  const pathname = usePathname();
  const setActiveClass = (path: string) =>
    pathname === path
      ? 'text-dark after:bg-dark'
      : 'text-gray-500 after:bg-white';

  return (
    <nav className={className} data-component="site-navigation">
      <ul className="flex items-center">
        {nav.map((navItem) => (
          <li key={navItem.name}>
            <Link
              href={navItem.path}
              className={`relative block px-8 font-semibold transition-all duration-200 ease-in-out after:absolute after:-bottom-2 after:left-1/2 after:-ml-2.5 after:h-0.75 after:w-5 after:rounded after:content-[''] hover:text-dark hover:after:animate-scaleX hover:after:bg-dark focus:text-dark focus:after:bg-dark ${setActiveClass(
                navItem.path
              )}`}
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
