import type { FC } from 'react';
import TagList from '@/components/TagList';
import { db } from '@/lib/db';

interface BlogTagListProps {
  limit?: number;
  className?: string;
}

const BlogTagList: FC<BlogTagListProps> = async ({
  limit = 8,
  className = '',
}) => {
  const tags = await db.tag.findMany({
    orderBy: {
      posts: {
        _count: 'desc',
      },
    },
    take: limit,
  });

  return <TagList tags={tags} className={className} />;
};

export default BlogTagList;
