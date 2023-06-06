import '@/app/SiteNav.css';

import { FC } from 'react';
import NavItem from '@/app/NavItem';
import { siteConfig } from '@/config/site';

interface SiteNavProps {
  className?: string;
}

const Nav: FC<SiteNavProps> = ({ className = '' }) => {
  const { nav } = siteConfig;

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
