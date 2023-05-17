import type { FC } from 'react';
import type { SizeOptions } from '@/types/base';

type FrameProps = {
  className?: string;
  children: React.ReactNode;
  gap?: SizeOptions;
};

const Frame: FC<FrameProps> = ({ children, className = '', gap = 'md' }) => {
  const gapClassList: { [key in SizeOptions]: `gap-${string}` } = {
    xs: 'gap-3',
    sm: 'gap-4',
    md: 'gap-5',
    lg: 'gap-6',
    xl: 'gap-7',
  };

  return (
    <div
      className={`grid grid-cols-12 px-7 py-10 ${gapClassList[gap]} ${className}`}
      data-component="frame"
    >
      {children}
    </div>
  );
};

export default Frame;
