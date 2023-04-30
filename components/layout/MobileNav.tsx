'use client';

import '@/components/layout/MobileNav.css';

import { FC } from 'react';
import Link from 'next/link';
import BaseSvg from '@/components/BaseSvg';
import BaseIcon from '@/components/BaseIcon';
import BaseButton from '@/components/BaseButton';
import { usePathname } from 'next/navigation';
import { nav } from '@/utils/constants';

interface MobileNavProps {
  className?: string;
  toggleMenu: (value: boolean) => void;
}

const Nav: FC<MobileNavProps> = ({ toggleMenu, className = '' }) => {
  const pathname = usePathname();

  return (
    <nav
      className={`nav--mobile fixed right-0 top-0 z-10 flex h-screen w-full max-w-[18rem] translate-x-full flex-col justify-between bg-white py-4 shadow-2xl transition-transform duration-500 ease-in-out ${className}`}
      data-component="mobile-navigation"
    >
      <div className="relative">
        <BaseSvg image="logo" width={180} className="mx-6 mb-6" />

        <button
          className="absolute right-0 top-0 p-4"
          onClick={() => toggleMenu(false)}
        >
          <BaseIcon icon="reg-xmark" className="text-2xl text-gray-600" />
        </button>

        <ul>
          {nav.map((navItem) => (
            <li key={navItem.name}>
              <Link
                href={navItem.path}
                className={`nav-item ${
                  pathname === navItem.path && 'is-active'
                }`}
              >
                {navItem.label}
                <BaseIcon icon="reg-spa" className="icon" />
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <BaseButton size="base" icon="reg-message-smile" className="mx-4">
        Escribeme!
      </BaseButton>
    </nav>
  );
};

export default Nav;
