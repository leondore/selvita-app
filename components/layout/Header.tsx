'use client';

import { useState } from 'react';
import BaseSvg from '@/components/BaseSvg';
import BaseButton from '@/components/BaseButton';
import SiteNav from '@/components/layout/SiteNav';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-white py-4" data-component="site-header">
      <div className="container mx-auto flex items-center px-4">
        <div className="flex flex-auto items-center justify-between">
          <div className="flex items-center">
            <BaseSvg
              image="logo"
              width={200}
              className="w-44 sm:w-52 md:mr-6 lg:mr-12"
            />

            <SiteNav className="sm:flex-auto" />
          </div>

          <BaseButton
            size="lg"
            icon="reg-message-smile"
            className="hidden md:inline-block"
          >
            <span className="lg:hidden">Escribeme!</span>
            <span className="hidden lg:inline">Mandame un Mensaje!</span>
          </BaseButton>

          <button
            className={`hamburger inline-block md:hidden ${
              isMenuOpen && 'is-active'
            }`}
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
