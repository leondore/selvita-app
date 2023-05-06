'use client';

import '@/components/layout/MobileNav.css';

import { FC } from 'react';
import { useState } from 'react';
import MobilePanel from '@/components/layout/MobilePanel';

interface MobileNavProps {
  className?: string;
}

const MobileNav: FC<MobileNavProps> = ({ className = '' }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className={className}>
      <button
        className={`hamburger inline-block ${isMenuOpen ? 'is-active' : ''}`}
        type="button"
        onClick={() => setIsMenuOpen(true)}
      >
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>

      <MobilePanel
        className={isMenuOpen ? 'is-active' : ''}
        toggleMenu={setIsMenuOpen}
      />
    </div>
  );
};

export default MobileNav;
