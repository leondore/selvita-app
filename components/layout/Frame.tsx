import type { FC } from 'react';

type FrameProps = {
  className?: string;
  children: React.ReactNode;
};

const Frame: FC<FrameProps> = ({ children, className = '' }) => {
  return (
    <div className={`bg-gray-100 px-7 py-10 ${className}`}>{children}</div>
  );
};

export default Frame;
