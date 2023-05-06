import '@/components/layout/SiteNav.css';

import { FC } from 'react';
import NavItem from '@/components/layout/NavItem';
import { nav } from '@/utils/constants';

interface SiteNavProps {
  className?: string;
}

const Nav: FC<SiteNavProps> = ({ className = '' }) => {
  return (
    <nav className={`flex-auto ${className}`} data-component="site-navigation">
      <ul className="sm:flex sm:items-center">
        {nav.map((navItem) => (
          <NavItem key={navItem.name} path={navItem.path}>
            {navItem.label}
          </NavItem>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
