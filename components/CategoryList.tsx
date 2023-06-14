import { FC } from 'react';
import Link from 'next/link';
import { db } from '@/lib/db';

interface CategoryListProps {
  limit?: number;
  className?: string;
}

const CategoryList: FC<CategoryListProps> = async ({
  limit = 6,
  className = '',
}) => {
  const categories = await db.category.findMany({
    include: {
      _count: {
        select: { posts: true },
      },
    },
    orderBy: {
      posts: {
        _count: 'desc',
      },
    },
    take: limit,
  });

  return (
    <ul className={className}>
      {categories.map((category) => (
        <li key={category.id} className="mb-3.5 last:mb-0">
          <Link
            href={`/category/${category.slug}`}
            className="group relative flex h-14 items-center overflow-hidden rounded bg-white pl-5 text-sm font-medium text-gray-400 transition-colors duration-150 ease-in-out hover:bg-dark hover:text-white"
          >
            {category.name}
            <span className="absolute bottom-0 right-0 top-0 flex w-14 items-center justify-center bg-gray-200 text-gray-400 transition-colors duration-150 ease-in-out group-hover:bg-primary group-hover:text-white">
              ({category._count.posts})
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default CategoryList;
