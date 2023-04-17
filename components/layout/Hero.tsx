import type { FC } from 'react';

type HeroProps = {
  children: React.ReactNode;
};

const Hero: FC<HeroProps> = ({ children }) => {
  return <div>{children}</div>;
};
