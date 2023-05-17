import '@/app/MobilePanel.css';

import { FC } from 'react';
import BaseSvg from '@/components/ui/BaseSvg';
import BaseIcon from '@/components/ui/BaseIcon';
import NavItem from '@/app/NavItem';
import HeaderCta from '@/app/HeaderCta';
import { nav } from '@/utils/constants';

interface MobilePanelProps {
  className?: string;
  toggleMenu: (value: boolean) => void;
}

const MobilePanel: FC<MobilePanelProps> = ({ toggleMenu, className = '' }) => {
  return (
    <nav
      className={`nav--mobile fixed left-0 top-0 z-50 flex h-screen w-full max-w-[18rem] -translate-x-full flex-col justify-between bg-white py-4 shadow-2xl transition-transform duration-500 ease-in-out ${className}`}
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
            <NavItem key={navItem.name} path={navItem.path}>
              {navItem.label}
            </NavItem>
          ))}
        </ul>
      </div>

      <HeaderCta size="md" className="mx-4">
        Escribeme!
      </HeaderCta>
    </nav>
  );
};

export default MobilePanel;
