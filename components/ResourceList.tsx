import React, { FC } from 'react';
import Link from 'next/link';

interface ResourceListProps {
  children: React.ReactNode;
  className?: string;
}

interface ResourceListItemProps {
  label: string;
  url: string;
  count: number;
  className?: string;
}

type ResourceListItem = FC<ResourceListItemProps>;
type ResourceList = FC<ResourceListProps> & { Item: ResourceListItem };

const ResourceListItem: ResourceListItem = ({
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

const ResourceList: ResourceList = ({ children, className = '' }) => {
  return <ul className={className}>{children}</ul>;
};

ResourceList.Item = ResourceListItem;

export default ResourceList;
