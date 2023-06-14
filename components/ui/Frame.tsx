import type { FC } from 'react';
import type { SizeOptions, ColumnOptions } from '@/types';

type FrameProps = {
  className?: string;
  children: React.ReactNode;
  columns?: ColumnOptions;
  gap?: SizeOptions;
};

const Frame: FC<FrameProps> = ({
  children,
  className = '',
  columns = 1,
  gap = 'md',
}) => {
  const columnsClassList: { [key in ColumnOptions]: `grid-cols-${key}` } = {
    1: 'grid-cols-1',
    2: 'grid-cols-2',
    3: 'grid-cols-3',
    4: 'grid-cols-4',
    6: 'grid-cols-6',
    8: 'grid-cols-8',
    9: 'grid-cols-9',
    12: 'grid-cols-12',
  };

  const gapClassList: { [key in SizeOptions]: `gap-${string}` } = {
    xs: 'gap-3',
    sm: 'gap-4',
    md: 'gap-5',
    lg: 'gap-6',
    xl: 'gap-7',
  };

  return (
    <div
      className={`grid rounded-md px-7 py-9 ${columnsClassList[columns]} ${gapClassList[gap]} ${className}`}
      data-component="frame"
    >
      {children}
    </div>
  );
};

export default Frame;
