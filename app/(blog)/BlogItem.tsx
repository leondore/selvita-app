import type { FC } from 'react';
import type { User } from '@/types/base';
import Image from 'next/image';
import DOMPurify from 'isomorphic-dompurify';

export interface Post {
  imageUrl: string;
  author?: User;
  comments?: number;
  likes?: number;
  title: string;
  date: string;
  content: string;
}

interface Props {
  post: Post;
  children?: React.ReactNode;
  className?: string;
}

const BlogItem: FC<Props> = ({ post, children, className }) => {
  const content = { __html: DOMPurify.sanitize(post.content) };

  return (
    <article>
      <header>
        <div className="relative mb-8">
          <Image
            src={post.imageUrl}
            alt={post.title}
            width={616}
            height={322}
          />
          <span className="absolute -bottom-6 right-6 block w-17 rounded bg-primary px-4 py-3 text-center font-medium leading-tight text-white shadow">
            {post.date}
          </span>
        </div>
        <h3>{post.title}</h3>
      </header>

      <div dangerouslySetInnerHTML={content}></div>
    </article>
  );
};

export default BlogItem;
