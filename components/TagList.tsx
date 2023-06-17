import type { FC } from 'react';
import type { Tag } from '@/types';
import Link from 'next/link';

interface TagListProps {
  tags: Tag[];
  className?: string;
}

const TagList: FC<TagListProps> = ({ tags, className = '' }) => {
  return (
    <ul className={`flex flex-wrap items-center gap-3 ${className}`}>
      {tags.map((tag) => (
        <li key={tag.id}>
          <Link
            href={`/blog/tags/${tag.slug}`}
            className="block rounded bg-white px-4 py-3 text-sm font-normal text-gray-500 transition-colors duration-150 ease-in-out hover:bg-primary hover:text-white"
          >
            {tag.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default TagList;
