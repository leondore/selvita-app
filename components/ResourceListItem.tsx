import { FC } from 'react';
import Link from 'next/link';

interface ResourceListItemProps {
  label: string;
  url: string;
  count: number;
  className?: string;
}

const ResourceListItem: FC<ResourceListItemProps> = async ({
  label,
  url,
  count,
  className = '',
}) => {
  return (
    <li className={`mb-3.5 last:mb-0 ${className}`}>
      <Link
        href={url}
        className="group relative flex h-14 items-center overflow-hidden rounded bg-white pl-5 text-sm font-medium text-gray-500 transition-colors duration-150 ease-in-out hover:bg-dark hover:text-white"
      >
        {label}
        <span className="absolute bottom-0 right-0 top-0 flex w-14 items-center justify-center bg-gray-200 text-gray-500 transition-colors duration-150 ease-in-out group-hover:bg-primary group-hover:text-white">
          ({count})
        </span>
      </Link>
    </li>
  );
};

export default ResourceListItem;
