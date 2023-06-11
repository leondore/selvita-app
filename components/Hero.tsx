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
        <div className="relative z-10 flex h-full">
          <div className="w-1/12"></div>
          <div className="w-10/12 max-w-3xl bg-dark/80 px-[7.5%] py-24 backdrop-blur-md md:py-32 lg:py-40 xl:py-52">
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
