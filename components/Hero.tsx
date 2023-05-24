import type { FC } from 'react';
import type { StaticImageData } from 'next/image';
import Image from 'next/image';

type HeroProps = {
  image: StaticImageData;
  children?: React.ReactNode;
};

const Hero: FC<HeroProps> = ({ image, children }) => {
  return (
    <div
      className="relative min-h-[14.5rem] overflow-hidden"
      data-component="hero"
    >
      {!!children && (
        <div className="h-full">
          <div className="w-1/12"></div>
          <div className="w-10/12 max-w-3xl bg-dark/80 px-[7.5%] py-16 backdrop-blur-md md:py-24 lg:py-36 xl:py-44">
            {children}
          </div>
        </div>
      )}

      <Image
        src={image}
        alt=""
        fill={true}
        placeholder="blur"
        style={{ objectFit: 'cover' }}
      />
    </div>
  );
};

export default Hero;
