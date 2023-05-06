'use client';

import type { FC } from 'react';
import Link from 'next/link';
import BaseIcon from '@/components/BaseIcon';
import { usePathname } from 'next/navigation';

interface NavItemProps {
  path: string;
  className?: string;
  children: React.ReactNode;
}

const NavItem: FC<NavItemProps> = ({ path, className = '', children }) => {
  const pathname = usePathname();

  return (
    <li className={className}>
      <Link
        href={path}
        className={`nav-item ${pathname === path ? 'is-active' : ''}`}
      >
        {children}
        <BaseIcon icon="reg-spa" className="icon" />
      </Link>
    </li>
  );
};

export default NavItem;
