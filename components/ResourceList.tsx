import { FC } from 'react';

interface ResourceListProps {
  children: React.ReactNode;
  className?: string;
}

const ResourceList: FC<ResourceListProps> = ({ children, className = '' }) => {
  return <ul className={className}>{children}</ul>;
};

export default ResourceList;
