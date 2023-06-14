import { FC } from 'react';
import ResourceList from '@/components/ResourceList';
import ResourceListItem from '@/components/ResourceListItem';
import { db } from '@/lib/db';

interface BlogCategoryListProps {
  limit?: number;
  className?: string;
}

const BlogCategoryList: FC<BlogCategoryListProps> = async ({
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
    <ResourceList className={className}>
      {categories.map((category) => (
        <ResourceListItem
          key={category.id}
          label={category.name}
          url={`/category/${category.slug}`}
          count={category._count.posts}
        />
      ))}
    </ResourceList>
  );
};

export default BlogCategoryList;
