'use client';

import '@/components/layout/Header.css';

import { useState } from 'react';
import BaseSvg from '@/components/BaseSvg';
import BaseButton from '@/components/BaseButton';
import SiteNav from '@/components/layout/SiteNav';
import MobileNav from '@/components/layout/MobileNav';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-white py-5" data-component="site-header">
      <div className="container mx-auto flex items-center px-4">
        <div className="flex flex-auto items-center justify-between">
          <div className="flex items-center">
            <BaseSvg
              image="logo"
              width={200}
              className="mr-2 w-44 md:mr-6 md:w-52 lg:mr-12"
            />

            <SiteNav className="hidden sm:block" />
          </div>

          <BaseButton
            size="lg"
            icon="reg-message-smile"
            className="hidden sm:inline-block"
          >
            <span className="lg:hidden">Escribeme!</span>
            <span className="hidden lg:inline">Mandame un Mensaje!</span>
          </BaseButton>

          <button
            className={`hamburger inline-block sm:hidden ${
              isMenuOpen && 'is-active'
            }`}
            type="button"
            onClick={() => setIsMenuOpen(true)}
          >
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
        </div>
      </div>

      <MobileNav
        className={`sm:hidden ${isMenuOpen && 'is-active'}`}
        toggleMenu={setIsMenuOpen}
      />
    </div>
  );
};

export default Header;
