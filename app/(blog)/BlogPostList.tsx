import type { FC } from 'react';
import type { Prisma } from '@prisma/client';
import Link from 'next/link';
import Image from 'next/image';
import { db } from '@/lib/db';

interface BlogPostListProps {
  show: 'recent' | 'popular';
  limit?: number;
  className?: string;
}

const BlogPostList: FC<BlogPostListProps> = async ({
  show,
  limit = 3,
  className = '',
}) => {
  const orderBy: Prisma.Enumerable<Prisma.PostOrderByWithRelationInput> =
    show === 'recent' ? { createAt: 'desc' } : { likes: { _count: 'desc' } };
  const posts = await db.post.findMany({
    include: {
      likes: true,
    },
    orderBy: orderBy,
    take: limit,
  });

  return (
    <ul className={className}>
      {posts.map((post) => (
        <li key={post.id} className="mb-8 last:mb-0">
          <Link href={`/blog/${post.slug}`} className="block">
            <Image
              src={post.image || '/blog1.webp'}
              alt={post.title}
              width={264}
              height={138}
              className="mb-3 rounded-md"
            />

            <h5 className="mb-0 leading-tight">{post.title}</h5>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default BlogPostList;
