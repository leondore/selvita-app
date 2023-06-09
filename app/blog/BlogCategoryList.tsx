import { FC } from 'react';
import ResourceList from '@/components/ResourceList';
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
        <ResourceList.Item
          key={category.id}
          label={category.name}
          url={`/blog/category/${category.slug}`}
          count={category._count.posts}
        />
      ))}
    </ResourceList>
  );
};

export default BlogCategoryList;
