import type { FC } from 'react';
import type { User } from '@/types/base';
import Image from 'next/image';

interface Props {
  imageUrl: string;
  author?: User;
  comments?: number;
  likes?: number;
  title: string;
  content?: string;
  date: string;
}

const BlogItem: FC<Props> = ({
  imageUrl,
  author,
  comments,
  likes,
  title,
  content,
  date,
}) => {
  return (
    <article>
      <header>
        <div className="relative">
          <Image src={imageUrl} alt={title} width={616} height={411} />
          <span className="block">{date}</span>
        </div>
        <h3>{title}</h3>
      </header>
    </article>
  );
};

export default BlogItem;
