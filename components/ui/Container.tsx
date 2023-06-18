import type { FC } from 'react';

interface ContainerProps {
  className?: string;
  children: React.ReactNode;
}

const Container: FC<ContainerProps> = ({ children, className = '' }) => {
  return (
    <div
      className={`mx-auto max-w-7xl px-6 pt-14 md:pt-16 lg:pt-20 xl:pt-24 ${className}`}
      data-component="container"
    >
      {children}
    </div>
  );
};

export default Container;
