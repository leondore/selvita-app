import type { FC } from 'react';
import type { Svgs } from '@/utils/svg';

import { svgs } from '@/utils/svg';

type BaseSvgProps = {
  image: Svgs;
  className?: string;
  width?: number | string;
  height?: number | string;
};

const BaseSvg: FC<BaseSvgProps> = ({
  image,
  width,
  height,
  className = '',
}) => {
  const svgContent = svgs[image] ? { __html: svgs[image].content } : undefined;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={width}
      height={height}
      viewBox={svgs[image]?.viewBox}
      dangerouslySetInnerHTML={svgContent}
    ></svg>
  );
};

export default BaseSvg;
