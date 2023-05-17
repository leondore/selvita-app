import type { FC } from 'react';
import HeroImg from '@/public/hero.webp';

type HeroProps = {
  children: React.ReactNode;
};

const Hero: FC<HeroProps> = ({ children }) => {
  return (
    <div
      className="flex bg-cover bg-center"
      style={{ backgroundImage: `url(${HeroImg.src})` }}
      data-component="hero"
    >
      <div className="w-1/12"></div>
      <div className="w-10/12 max-w-3xl bg-dark/80 px-[7.5%] py-16 backdrop-blur-md md:py-24 lg:py-36 xl:py-44">
        {children}
      </div>
    </div>
  );
};

export default Hero;
