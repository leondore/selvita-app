import type { FC } from 'react';
import type { User } from '@prisma/client';
import Image from 'next/image';
import DOMPurify from 'isomorphic-dompurify';
import BaseIcon from '@/components/ui/BaseIcon';

export interface Post {
  imageUrl: string;
  author: User;
  comments: number;
  likes: number;
  title: string;
  date: string;
  content: string;
}

interface Props {
  post: Post;
  className?: string;
}

const BlogItem: FC<Props> = ({ post, className }) => {
  const content = { __html: DOMPurify.sanitize(post.content) };

  return (
    <article className={className}>
      <header className="mb-4">
        <div className="relative mb-8">
          <Image
            src={post.imageUrl}
            alt={post.title}
            width={616}
            height={322}
            className="rounded-md"
          />
          <span className="absolute -bottom-6 right-6 block w-16 rounded bg-primary px-4 py-3 text-center text-sm font-medium leading-tight text-white shadow-md sm:w-17 sm:text-base sm:leading-tight">
            {post.date}
          </span>
        </div>

        <div className="mb-6 flex items-center gap-5">
          <div className="hidden text-sm font-medium text-gray-600 sm:block">
            <BaseIcon icon="reg-user" className="mr-1 text-base text-primary" />{' '}
            {post.author.name}
          </div>

          <div className="text-sm font-medium text-gray-600">
            <BaseIcon
              icon="reg-messages"
              className="mr-1 text-base text-primary"
            />{' '}
            {post.comments} comentario{post.comments !== 1 ? 's' : ''}
          </div>

          <div className="text-sm font-medium text-gray-600">
            <BaseIcon
              icon="reg-heart"
              className="mr-1 text-base text-primary"
            />{' '}
            {post.likes} like{post.likes !== 1 ? 's' : ''}
          </div>
        </div>

        <h3 className="mb-0">{post.title}</h3>
      </header>

      <div
        className="text-sm sm:text-base"
        dangerouslySetInnerHTML={content}
      ></div>
    </article>
  );
};

export default BlogItem;
